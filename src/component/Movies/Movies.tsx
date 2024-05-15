import { useCallback, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { BoardFilm, BoxFilm } from "../MovieCard/MovieCard.styled";

import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import Loader from "../Loader/Loader";
import { Grid, Typography } from "@mui/material";
import MoviesFilter, { Filters } from "../MoviesFilter/MoviesFilter";
import { MovieFilters } from "../../api/tmdb";
import { MovieQuery, useGetFiltrateMoviesQuery } from "../../services/tmbd";
import { useLocation } from "react-router-dom";

// interface MoviesProps {
//   movies: Movie[];
//   loading: boolean;
//   hasMorePages: boolean;
// }
const initialQuery: MovieQuery = {
  page: 1,
  filters: {},
};

function Movies() {
  const [query, setQuery] = useState<MovieQuery>(initialQuery);
  const { data, isFetching } = useGetFiltrateMoviesQuery(query);
  const [filter, setFilter] = useState<Filters>();
  const movies = data?.results;
  const hasMorePages = data?.hasMorePages;
  const onIntersect = useCallback(() => {
    if (hasMorePages) {
      setQuery((q) => ({ ...q, page: q.page + 1 }));
    }
  }, [hasMorePages]);
  const [targetRef] = useIntersectionObserver({ onIntersect });

  // useEffect(() => {
  //   if (entry?.isIntersecting && hasMorePages) {
  //    const word = filter ? { keywords: filter.keywords.map((item:KeywordsItem) => item.id) } : undefined;
  //     const date = filter ? { year: filter.primary_release_year } : undefined;
  //     const genres = filter ? { genres: filter.genres } : undefined;
  //    const movieFilters = { ...word, ...date,...genres };
  //     dispatch(fetchNextPage(movieFilters));
  //   }
  // }, [dispatch, entry?.isIntersecting, hasMorePages, filter]);

  function filtrateMovies(data: Filters) {
    // dispatch(resetMovies());
    const moviesFilters: MovieFilters = {
      keywords: data.keywords.map((item) => item.id),
      genres: data.genres,
      year: data.primary_release_year,
    };
    setQuery({
      page: 1,
      filters: moviesFilters,
    });
  }
  return (
    <Grid container spacing={0} sx={{ flexWrap: "nowrap", pt: 3 }}>
      <Grid item xs={5}>
        <MoviesFilter onApply={(data) => filtrateMovies(data)} />
      </Grid>
      <Grid item xs={12}>
        {!isFetching && !movies?.length && (
          <Typography variant="h6">
            No movies were found that match you query
          </Typography>
        )}
        <BoardFilm>
          {movies?.map((m, i) => (
            <BoxFilm key={`${m.id}+${i}`}>
              <MovieCard
                id={m.id}
                title={m.title}
                poster_path={m.poster_path}
                popularity={m.popularity}
              />
            </BoxFilm>
          ))}
        </BoardFilm>
        <div ref={targetRef}>{isFetching && <Loader />}</div>
      </Grid>
    </Grid>
  );
}
// const mapStateToProps = (state: RootState) => ({
//   movies: state.movies.top,
//   loading: state.movies.loading,
//   hasMorePages:state.movies.hasMorePages,
// });

// const connector = connect(mapStateToProps);

export default Movies;
