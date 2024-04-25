import React, { useEffect, useState} from "react";
import { connect } from "react-redux";

import {
  fetchNextPage,
  Movie,
  resetMovies,
} from "../../reducers/movies";
import { RootState } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import { BoardFilm, BoxFilm } from "../MovieCard/MovieCard.styled";
import { useAppDispatch } from "../../hooks";

import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import Loader from "../Loader/Loader";
import { Grid } from "@mui/material";
import MoviesFilter, { Filters } from "../MoviesFilter/MoviesFilter";
import { KeywordsItem } from "../../api/tmdb";

interface MoviesProps {
  movies: Movie[];
  loading: boolean;
  hasMorePages: boolean;
}

function Movies({ movies, loading, hasMorePages }: MoviesProps) {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<Filters>();
  const [targetRef, entry] = useIntersectionObserver();
  useEffect(() => {
    dispatch(resetMovies());
  },[dispatch])
  useEffect(() => {
    if (entry?.isIntersecting && hasMorePages) {
     const word = filter ? { keywords: filter.keywords.map((item:KeywordsItem) => item.id) } : undefined;
     const date = filter?{year:filter.primary_release_year}:undefined
     const movieFilters = { ...word, ...date };
      dispatch(fetchNextPage(movieFilters));
    }
  }, [dispatch, entry?.isIntersecting, hasMorePages, filter]);

  function filtrateMovies(data: Filters) {
    dispatch(resetMovies());
    console.log(data);
    setFilter(data);
  }
  return (
    <Grid container spacing={0} sx={{flexWrap:'nowrap', pt:3}}>
      <Grid item xs={5}>
        <MoviesFilter onApply={(data)=>filtrateMovies(data)}/>
      </Grid>
      <Grid item xs={12} >
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
      </Grid>
    </Grid>
  );
}
const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
  loading: state.movies.loading,
  hasMorePages:state.movies.hasMorePages,
});

const connector = connect(mapStateToProps);

export default connector(Movies);


