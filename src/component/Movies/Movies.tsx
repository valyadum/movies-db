import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { client } from "../../api/tmdb";
import { Movie, moviesLoaded, moviesLoading } from "../../reducers/movies";
import { RootState } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import { BoardFilm, BoxFilm } from "../MovieCard/MovieCard.styled";

interface MoviesProps {
    movies: Movie[];
    loading: boolean;
}

function Movies({ movies,loading }: MoviesProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      dispatch(moviesLoading());

    //   const config = await client.getConfiguration();
    //   const imageUrl = config.images.base_url;
      const result = await client.getNowPlaying();

      const mappedResult: Movie[] = result.map((m) => ({
        title: m.title,
        poster_path: m.poster_path,
        id: m.id,
        popularity: m.popularity,
      }));
      dispatch(moviesLoaded(mappedResult));
    }
    loadData();
  }, [dispatch]);

  return (
      <BoardFilm>
          {loading? <h3>Loading...</h3>:
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
