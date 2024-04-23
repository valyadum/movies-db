import { Movie } from './../reducers/movies';
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
interface Genre{
  id: number;
  name: string
}
  interface MoviesData {
    page: number;
    results: MovieDetail[];
    total_pages: number;
    total_results: number;
  }
interface PageDetails<TResult> {
  page: number;
  results: MovieDetail[];
  total_pages: number;
}

axios.defaults.baseURL = "https://api.themoviedb.org";
  const config: AxiosRequestConfig = {
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${configuration.apiKey}`
    },
  };
export const getFavoriteMovies = async (page:number=1):Promise<PageDetails<MovieDetail>> => {

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


export const getMovieDetails = async (
  movieId: string
): Promise<MovieInfo| undefined> => {
  try {
    const res = await axios.get<MovieInfo>(`3/movie/${movieId}`, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};