import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { fetchMovies, Movie, moviesLoaded, moviesLoading } from "../../reducers/movies";
import { RootState } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import { BoardFilm, BoxFilm } from "../MovieCard/MovieCard.styled";
import { useAppDispatch } from "../../hooks";
import { LinearProgress } from "@mui/material";

interface MoviesProps {
    movies: Movie[];
    loading: boolean;
}

function Movies({ movies,loading }: MoviesProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
      <BoardFilm>
          {loading? <LinearProgress color="secondary"/>:
      (movies.map((m) => (
          <BoxFilm key={m.id}>
             
          <MovieCard
            id={m.id}
            title={m.title}
            poster_path={m.poster_path}
            popularity={m.popularity}
          />
        </BoxFilm>
      )))}
    </BoardFilm>
  );
}
const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top,
    loading:state.movies.loading,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
