import { Box } from "@mui/material";
import React, {  useRef} from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../../services/tmbd";
import Loader from "../Loader/Loader";
import {

  BoxFilm,
  BoxInfo,
  ButtonBack,
  CastLi,
  CastLink,
  CastStyle,
  Container,
  ContainerButton,
  ContainerFilm,
  GenresItem,
  GenresUl,
  Img,
  InfoContainer,
  Line,
  Option,
  Text,
  TextStar,
  Title,
} from "./MovieDetails.module";
import { FaStar } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";

function MovieDetails() {
  const { movieId} = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");
  const { data, isFetching } = useGetMovieDetailsQuery(movieId || "");
  const backgroundImage = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data?.backdrop_path}`;
  const defaultImg =
    "https://cannamazoo.com/assets/defaults/img/default-product-img.jpg";

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      minWidth="100vw"
      position="relative"
    >
      {isFetching ? (
        <Loader />
      ) : (
        <Container>
          <ContainerFilm data={backgroundImage}>
            <ContainerButton>
              <ButtonBack to={backLink.current}>Go Back</ButtonBack>
            </ContainerButton>
            <InfoContainer>
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
                  <FaStar color="gold" size={16} />
                </TextStar>
                {/* <h3>Overview</h3> */}
                <Text>{data?.overview}</Text>
                <GenresUl>
                  <IoMdPricetags color="white" />
                  Genres:
                  {data?.genres &&
                    data?.genres.map((genre) => {
                      return (
                        <GenresItem key={genre.id}>{genre.name}</GenresItem>
                      );
                    })}
                </GenresUl>
              </BoxInfo>
            </InfoContainer>
            <CastStyle>
              <Line />
              <Option>
                <CastLi>
                  <CastLink to="cast">Cast & Actors</CastLink>
                  <Outlet />
                </CastLi>
                {/* <CastLi>
                  <CastLink to="reviews">Reviews</CastLink>
                  <Outlet />
                </CastLi> */}
              </Option>
            </CastStyle>
          </ContainerFilm>
        </Container>
      )}
    </Box>
  );
}

export default MovieDetails;
