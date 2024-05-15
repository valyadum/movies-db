import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configuration from '../configuration';

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
interface MovieInfo extends MovieDetail {
  genres: Genre[];
}
interface Genre {
  id: number;
  name: string;
}
interface PageDetails {
  results: MovieDetail[];
  lastPage: number;
  hasMorePages: boolean;
}
interface MovieFilters {
  keywords?: number[];
  year?: number;
  genres?: number[];
}
export interface MovieQuery {
  page: number;
  filters: MovieFilters;
}
interface KeywordsItem {
  id: number;
  name: string;
}
interface PageResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
}
interface GenresItem{
  id: number;
  name: string;
}
 interface GenresList<T>{
  genres: T[];
};
export const tmdbApi =createApi({
  reducerPath: "tmbdApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${configuration.apiUrl}/3`,
    prepareHeaders(headers) {
      headers.set("Accept", "application/json");
      headers.set("Authorization", `Bearer ${configuration.apiKey}`);
    },
  }),
  endpoints: (builder) => ({
    getFiltrateMovies: builder.query<PageDetails, MovieQuery>({
      query(moviesQuery) {
        const params = new URLSearchParams({
          page: moviesQuery.page.toString(),
        });

        if (moviesQuery.filters.keywords?.length) {
          params.append(
            "with_keywords",
            moviesQuery.filters.keywords.join("|")
          );
        }
        if (moviesQuery.filters.year) {
          if (moviesQuery.filters.year !== 1900) {
            params.append(
              "primary_release_year",
              moviesQuery.filters.year.toString()
            );
          }
        }
        if (moviesQuery.filters.genres?.length) {
          console.log(moviesQuery.filters.genres.join(","));

          params.append("with_genres", moviesQuery.filters.genres.join(","));
        }
        const query = params.toString();
        const path = `/discover/movie?${query}`;

        return path;
        },
        transformResponse(response: PageResponse<MovieDetail>, _, arg:MovieQuery) {
            return {
                results: response.results,
                lastPage: response.page,
                hasMorePages: arg.page < response.total_pages,
            }
        },
        serializeQueryArgs({endpointName}){return endpointName},// завжди повертатиме один і той же кеш, в іншому випадку будуть створюватися різні кеш-ендпоінти через запити
        merge(currentCatchData, responseData) {
            if (responseData.lastPage===1) {
                currentCatchData.results = responseData.results;
            }
            else {
                currentCatchData.results.push(...responseData.results)
            }
            currentCatchData.lastPage = responseData.lastPage;
            currentCatchData.hasMorePages = responseData.hasMorePages;
        },
        forceRefetch({ currentArg, previousArg }) {
            return currentArg !== previousArg;
        }
    }),
    getMovieDetails: builder.query<MovieInfo, string>({
      query(movieId) {
        const path = `/movie/${movieId}`;
        return path;
      },
    }),
    getKeywords: builder.query<KeywordsItem[], string>({
      query: (query) => `/search/keyword?query=${query}`,
      transformResponse: (response: PageResponse<KeywordsItem>) =>
        response.results,
    }),
    getGenres: builder.query<GenresItem[], void>({
        query: () => `/genre/movie/list`,
        transformResponse:((response:{genres:GenresItem[]})=>response.genres)
    }),
  }),
});

export const {useGetFiltrateMoviesQuery,useGetGenresQuery,useGetKeywordsQuery,useGetMovieDetailsQuery } = tmdbApi;