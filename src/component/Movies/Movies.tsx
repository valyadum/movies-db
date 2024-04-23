import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  fetchNextPage,
  Movie,
  // moviesLoaded,
  // moviesLoading,
} from "../../reducers/movies";
import { RootState } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import { BoardFilm, BoxFilm } from "../MovieCard/MovieCard.styled";
import { useAppDispatch } from "../../hooks";
// import { LinearProgress } from "@mui/material";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import Loader from "../Loader/Loader";

interface MoviesProps {
  movies: Movie[];
  loading: boolean;
  hasMorePages: boolean;
}

function Movies({ movies, loading, hasMorePages }: MoviesProps) {
  const dispatch = useAppDispatch();
  const [targetRef, entry] = useIntersectionObserver();
  useEffect(() => {
    if (entry?.isIntersecting && hasMorePages) {
      dispatch(fetchNextPage());
    }
  }, [dispatch, entry?.isIntersecting, hasMorePages]);

  return (
    <>
      <BoardFilm>
        {movies?.map((m) => (
          <BoxFilm key={m.id}>
            <MovieCard
              id={m.id}
              title={m.title}
              poster_path={m.poster_path}
              popularity={m.popularity}
            />
          </BoxFilm>
        ))}
      </BoardFilm>
      <div ref={targetRef}>{loading && <Loader />}</div>
    </>
  );
}
const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
  loading: state.movies.loading,
  hasMorePages:state.movies.hasMorePages,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
