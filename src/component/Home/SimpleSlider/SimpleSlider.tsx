import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
  A11y,
} from "swiper/modules";
import { useGetFavoriteMoviesQuery } from "../../../services/tmbd";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link, useLocation } from "react-router-dom";
import Rating from "../../Rating/Rating";
import { Box } from "@mui/material";
// import { Rating } from "@mui/material";

export default function SimpleSlider() {
  // const { data, isFetching } = useGetFavoriteMoviesQuery();
  const { data } = useGetFavoriteMoviesQuery();

  const location = useLocation();
  console.log(data);
  //   function getRating(num) {
  //   num.to
  // }

  return (
    <div className="slide-container">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        modules={[Autoplay, Navigation, Pagination, A11y, EffectCoverflow]}
        navigation
        centeredSlides={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.original_title}
              />
              <div>
                <div className="title-container">
                  {item.title}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                    }}
                  >
                    <Rating defaultValue={item.vote_average} />
                  </Box>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
