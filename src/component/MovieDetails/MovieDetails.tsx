import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getMovieDetails, MovieInfo } from "../../api/tmdb";
import { BoxFilm, BoxInfo, CastLi, CastLink, CastStyle, Container, ContainerFilm, GenresUl, Img, Line, Option, Text, TextStar, Title } from "./MovieDetails.module";
// import { FaStar } from "react-icons/fa";
// import { IoMdPricetags } from "react-icons/io";

function MovieDetails() {
  const { movieId } = useParams();
  const [data, setData] = useState<MovieInfo>();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    getMovieDetails(movieId)
      .then((info) => {
        setData(info);
      })
      .catch((err) => console.error(err));
  }, [movieId]);
const defaultImg =
  "https://cannamazoo.com/assets/defaults/img/default-product-img.jpg";
  // const { poster_path, title, vote_average, overview, genres } = data;
  return (

      <Container>
        {/* <ContainerButton>
          <ButtonBack to={backLink.current}>Go Back</ButtonBack>
        </ContainerButton> */}

        <ContainerFilm>
          <BoxFilm>
            <Img
              src={
                data?.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${data?.poster_path}`
                  : defaultImg
              }
              width={250}
              alt={data?.title}
            />
          </BoxFilm>
          <BoxInfo>
            <Title>{data?.title}</Title>
            <TextStar>
              User score: {data?.vote_average}
              {/* <FaStar color="gold" size={16} /> */}
            </TextStar>
            {/* <h3>Overview</h3> */}
            <Text>{data?.overview}</Text>
            <GenresUl>
              {/* <IoMdPricetags color="white" /> */}
              Genres:
              {/* {genres &&
                genres.map((genre) => {
                  return <GenresItem key={genre.id}>{genre.name}</GenresItem>;
                })} */}
            </GenresUl>
          </BoxInfo>
        </ContainerFilm>
        <CastStyle>
          <Line />
          <Option>
            {/* Addiction information */}
            <CastLi>
              <CastLink to="cast">Cast</CastLink>
            </CastLi>
            <CastLi>
              <CastLink to="reviews">Reviews</CastLink>
            </CastLi>
          </Option>
          <Outlet />
        </CastStyle>
      </Container>

  );
}

export default MovieDetails;


// {
//   "adult": false,
//   "backdrop_path": "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
//   "belongs_to_collection": {
//     "id": 726871,
//     "name": "Dune Collection",
//     "poster_path": "/wcVafar6Efk3YgFvh8oZQ4yHL6H.jpg",
//     "backdrop_path": "/ygVSGv86R0BTOKJIb8RQ1sFxs4q.jpg"
//   },
//   "budget": 190000000,
//   "genres": [
//     {
//       "id": 878,
//       "name": "Science Fiction"
//     },
//     {
//       "id": 12,
//       "name": "Adventure"
//     }
//   ],
//   "homepage": "https://www.dunemovie.com",
//   "id": 693134,
//   "imdb_id": "tt15239678",
//   "origin_country": [
//     "US"
//   ],
//   "original_language": "en",
//   "original_title": "Dune: Part Two",
//   "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
//   "popularity": 2461.439,
//   "poster_path": "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
//   "production_companies": [
//     {
//       "id": 923,
//       "logo_path": "/8M99Dkt23MjQMTTWukq4m5XsEuo.png",
//       "name": "Legendary Pictures",
//       "origin_country": "US"
//     }
//   ],
//   "production_countries": [
//     {
//       "iso_3166_1": "US",
//       "name": "United States of America"
//     }
//   ],
//   "release_date": "2024-02-27",
//   "revenue": 683813734,
//   "runtime": 167,
//   "spoken_languages": [
//     {
//       "english_name": "English",
//       "iso_639_1": "en",
//       "name": "English"
//     }
//   ],
//   "status": "Released",
//   "tagline": "Long live the fighters.",
//   "title": "Dune: Part Two",
//   "video": false,
//   "vote_average": 8.293,
//   "vote_count": 3047
// }