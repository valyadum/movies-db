import { AppThunk } from './../store';
import { ActionWithPayload, createReducer } from "../redux/utils";
import {getFavoriteMovies } from '../api/tmdb';

export interface Movie{
    // adult: boolean;
    // backdrop_path: string;
    // genre_ids: number[];
    id: number;
    // original_language: string;
    // original_title: string;
    // overview: string;
    popularity: number;
    poster_path?: string;
    // release_date: string;
    title: string;
    // video: boolean;
    // vote_average: number;
    // vote_count: number;
}

interface MovieState{
  top: Movie[];
  loading: boolean;
}

const initialState: MovieState = {
  top: [],
  loading:false,
};
export const moviesLoaded = (movies: Movie[]) => ({
  type: 'movies/loaded',
  payload: movies,
});

export const moviesLoading = () => ({
  type: "movies/loading",
});

export function fetchMovies():AppThunk<Promise<void>> {
  return async (dispatch, getState) => {
     dispatch(moviesLoading());
     const result = await getFavoriteMovies();
console.log(result);

     const mappedResult: Movie[]= (result ?? []).map((m) => ({
       title: m.title,
       poster_path: m.poster_path,
       id: m.id,
       popularity: m.popularity,
     }));
     dispatch(moviesLoaded(mappedResult));
  }
}

const moviesReducer = createReducer<MovieState>(initialState, {
  "movies/loaded": (state, action: ActionWithPayload<Movie[]>) => {
    return {
      ...state,
      top: action.payload,
      loading: false,
    };
  },
  "movies/loading": (state, action) => {
    return {
      ...state,
      loading: true,
    };
  },
});

export default moviesReducer;