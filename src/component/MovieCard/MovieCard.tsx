import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import ModalContent from "../../ModalContent";
import {  FilmName, Img} from "./MovieCard.styled";

interface MovieCardsProps {
  // adult: boolean;
  // backdrop_path: string;
  // genre_ids: number[];
  // id: number;
  // original_language: string;
  // original_title: string;
  // overview: string;
  // popularity: number;
  // poster_path?: string;
  // release_date: string;
  // title: string;
  // video: boolean;
  // vote_average: number;
  // vote_count: number;
  id: number;
  title: string;
  poster_path: string | undefined;
  popularity: number;
}
// type Props = {
//   movie: MovieCardsProps;
// };
//       "adult": false,
//       "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
//       "genre_ids": [
//         18,
//         80
//       ],
//       "id": 278,
//       "original_language": "en",
//       "original_title": "The Shawshank Redemption",
//       "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
//       "popularity": 171.726,
//       "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
//       "release_date": "1994-09-23",
//       "title": "The Shawshank Redemption",
//       "video": false,
//       "vote_average": 8.7,
//       "vote_count": 25927

function MovieCard({ id, title, poster_path, popularity }: MovieCardsProps) {
  const [showModal, setShowModal] = useState(false);

  const defaultImg =
    "https://cannamazoo.com/assets/defaults/img/default-product-img.jpg";
  return (
    <>
      <Link to={`/movies/${id}`}>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={200}
          height={300}
          alt={title}
        />
        <FilmName>{title}</FilmName>
      </Link>
    </>
  );
}

export default MovieCard;
