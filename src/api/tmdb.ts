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
export interface MovieInfo {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  overview: string;
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

axios.defaults.baseURL = "https://api.themoviedb.org";
  const config: AxiosRequestConfig = {
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${configuration.apiKey}`
    },
  };
export const getFavoriteMovies = async () => {
  try {
    const res = await axios.get<Promise<MoviesData>>("3/movie/popular", config);
    return (await res.data).results;

  } catch (error) {
    console.error(error);  
  }
};
export const getMovieDetails = async (
  movieId: string
): Promise<MovieInfo| undefined> => {
  try {
    const res = await axios.get(`3/movie/${movieId}`, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};