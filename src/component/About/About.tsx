import React from 'react'
import axios, { AxiosRequestConfig } from "axios";
import Loader from '../Loader/Loader';

  
function About() {
  interface Movies {
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
  interface MoviesData {
    page: number;
    results: Movies[];
    total_pages: number;
    total_results: number;
  }
  axios.defaults.baseURL = "https://api.themoviedb.org";
  const config: AxiosRequestConfig = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODE3NjI1YTk5ZTk2M2YzNmFiMGUxYzliYWI1NTM5NyIsInN1YiI6IjY1NjVlYTJmNmMwYjM2MDBhZTRmODIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lFhJj989Osu-VyS-ovhTF_4h3_slVTkFiuQ535IpjhM",
    },
  };
  const GetMovies = async () => {
    try {
      const res = await axios.get<Promise<MoviesData>>(
        "3/movie/popular",
        config
      );
console.log((await res.data).results);
      return (await res.data).results;
      
      
      // res.data.map(d=>console.log(d))
    } catch (error) {}
  };

  GetMovies();

  return <div><Loader/></div>;
}

export default About;