import React from 'react'
import { Link } from 'react-router-dom';

interface MovieCardsProps{
    id: number;
    title: string;
    overview: string;
    popularity: number;
}

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

function MovieCard({id, title, overview, popularity}:MovieCardsProps) {
  return (
    <div>
      <Link to={`/movies/${id}`}>{title}</Link>
      <div>{popularity}</div>
      <div>{overview}</div>
    </div>
  );
}

export default MovieCard