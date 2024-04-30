import configuration from "../configuration";
import axios, { AxiosRequestConfig } from "axios";

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface MovieInfo extends MovieDetail {
  genres: Genre[];
}
interface Genre {
  id: number;
  name: string;
}
interface MoviesData {
  page: number;
  results: MovieDetail[];
  total_pages: number;
  total_results: number;
}
interface PageDetails<T> {
  page: number;
  results: T;
  total_pages: number;
}
export interface KeywordsItem {
  id: number;
  name: string;
}
export interface MovieFilters {
  keywords?: number[];
  year?: number;
  genres?: number[];
}

export interface GenresItem{
  id: number;
  name: string;
}


export interface GenresList<T>{
  genres: T[];
};

axios.defaults.baseURL = "https://api.themoviedb.org";

export  const config: AxiosRequestConfig = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${configuration.apiKey}`,
  },
};
export const getFavoriteMovies = async (
  page: number = 1
): Promise<PageDetails<MovieDetail[]>> => {
  const res = await axios.get<MoviesData>(
    `/3/movie/popular?page=${page}`,
    config
  );
  return {
    results: res.data.results,
    page: res.data.page,
    total_pages: res.data.total_pages,
  };
};
export const getFiltrateMovies = async (
  page: number = 1,
  filters: MovieFilters
): Promise<PageDetails<MovieDetail[]>> => {
  

  const params = new URLSearchParams({
    page: page.toString(),
  });
  
  if (filters.keywords?.length) {
    params.append("with_keywords", filters.keywords.join("|"));
  }
  if (filters.year) {
    if (filters.year !== 1900) {
    params.append("primary_release_year", filters.year.toString());}
  }
  if (filters.genres?.length) {
      console.log(filters.genres.join(","));
      
      params.append("with_genres", filters.genres.join(","));
    }
  const query = params.toString();

  const res = await axios.get<MoviesData>(`/3/discover/movie?${query}`, config);
  return {
    results: res.data.results,
    page: res.data.page,
    total_pages: res.data.total_pages,
  };
};

export const getMovieDetails = async (
  movieId: string
): Promise<MovieInfo | undefined> => {
  try {
    const res = await axios.get<MovieInfo>(`/3/movie/${movieId}`, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getKeywords = async (query: string): Promise<KeywordsItem[]> => {
  try {
    const res = await axios.get<PageDetails<KeywordsItem[]>>(
      `/3/search/keyword?query=${query}`,
      config
    );
    return res.data.results;
  } catch (error) {
    console.error("Error fetching keywords:", error);
    return [];
  }
};
export const getGenres = async (): Promise<GenresItem[]> => {
  try {
    const res = await axios.get<GenresList<GenresItem>>(
      `3/genre/movie/list`,
      config
    );
    
    return res.data.genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};


// primary_release_year   для року пошук
// region
