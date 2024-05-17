import React from "react";
import { useParams } from "react-router-dom";
import { BoardCard, CardActor, ImgCard, Name } from "./Cast.styled";
import { useGetCastsQuery } from "../../services/tmbd";
import Loader from "../Loader/Loader";
import CastWrapper from "./CastWraper";

const Cast = () => {
  const { movieId } = useParams();
  const { data, isFetching } = useGetCastsQuery(movieId || "");

  const defaultImg =
    "https://cannamazoo.com/assets/defaults/img/default-product-img.jpg";

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <CastWrapper>
          <BoardCard>
            {data?.length &&
              data
                ?.slice(0, 10)
                .map(({ character, name, profile_path, id }) => {
                  return (
                    <CardActor key={id}>
                      <ImgCard
                        src={
                          profile_path
                            ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                            : defaultImg
                        }
                        alt={name}
                        width={250}
                      />
                      <div>
                        <Name>{name}</Name>
                        <Name>
                          Character: <span>{character}</span>
                        </Name>
                      </div>
                    </CardActor>
                  );
                })}
          </BoardCard>
        </CastWrapper>
      )}
    </>
  );
};

export default Cast;
