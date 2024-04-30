import { getFiltrateMovies, MovieFilters } from './../api/tmdb';
import { AppThunk } from './../store';
import { ActionWithPayload, createReducer } from "../redux/utils";

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

interface MovieState {
  top: Movie[];
  loading: boolean;
  page: number;
  hasMorePages: boolean;
}

const initialState: MovieState = {
  top: [],
  loading: false,
  page: 0,
  hasMorePages:true,
};
export const moviesLoaded = (movies: Movie[], page:number, hasMorePages:boolean) => ({
  type: 'movies/loaded',
  payload:{ movies, page, hasMorePages},
});

export const moviesLoading = () => ({
  type: "movies/loading",
});
export const resetMovies = () => ({
  type:"movies/reset"
})
export function fetchNextPage(filters:MovieFilters={}):AppThunk<Promise<void>> {
  return async (dispatch, getState) => {
    const nextPage = getState().movies.page + 1 ;
    dispatch(fetchPage(nextPage,filters));

  }
}
function fetchPage(
  page: number,
  filters: MovieFilters = {}
): AppThunk<Promise<void>> {
  return async (dispatch) => {
    dispatch(moviesLoading());
    const dataPage = await getFiltrateMovies(page, filters);

    const mappedResult: Movie[] = (dataPage?.results ?? []).map((m) => ({
      title: m.title,
      poster_path: m.poster_path,
      id: m.id,
      popularity: m.popularity,
    }));
    const hasMorePages = dataPage?.page < dataPage?.total_pages;
    dispatch(moviesLoaded(mappedResult, page, hasMorePages));
  };
}

const moviesReducer = createReducer<MovieState>(initialState, {
  "movies/loaded": (state, action: ActionWithPayload<{movies:Movie[],page:number, hasMorePages:boolean}>) => {
    return {
      ...state,
      top: [...state.top, ...action.payload.movies],
      page: action.payload.page,
      hasMorePages:action.payload.hasMorePages,
      loading: false,
    };
  },
  "movies/loading": (state, action) => {
    return {
      ...state,
      loading: true,
    };
  },
  "movies/reset": (state) => {
    return{...initialState}
  }
});

export default moviesReducer;