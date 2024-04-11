import React from "react";
import { connect } from "react-redux";
import { Movie } from "../../reducers/movies";
import { RootState } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import { BoardFilm, BoxFilm } from "../MovieCard/MovieCard.styled";

interface MoviesProps {
  movies: Movie[];
}

function Movies({ movies }: MoviesProps) {
    
  return (
    <BoardFilm>
      {movies.map((m) => (
        <BoxFilm key={m.id}>
              <MovieCard
          movie={m}
          />
        </BoxFilm>
      ))}
    </BoardFilm>
  );
}
const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
