import styled from "styled-components";
import { Link } from "react-router-dom";

// export const BackGround = styled.div`
// background: linear-gradient(to top, #104d7542, #5367ff2e);
// position: relative;
// `
export const Container = styled.div`
  max-width: 960px;
  margin: 0px auto;
  background-color: #0c0f21;
`;
export const ContainerButton = styled.div`
  /* margin-top:20px; */
  /* margin-bottom: 30px; */
`;
interface ContainerFilmProps {
  data?: string;
}
export const ContainerFilm = styled.div<ContainerFilmProps>`
  display: flex;
  gap: 30px;
  padding: 60px 40px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
      to right,
      rgba(52.5, 52.5, 52.5, 1) calc((50vw - 170px) - 340px),
      rgba(52.5, 52.5, 52.5, 0.84) 50%,
      rgba(52.5, 52.5, 52.5, 0.84) 100%
    ),
    url(${(props) => props.data});

  background-size: cover;
  background-position: center;
  flex-direction: column;
`;
export const InfoContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 40px 40px;
`;
export const BackgroundImg = styled.div`
  border-bottom: 1px solid var(--primaryColor);
  background-position: left calc((50vw - 170px) - 340px) top;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const BoxInfo = styled.div`
  width: 70%;
`;
export const ButtonBack = styled(Link)`
  background: linear-gradient(to bottom, #5367ff, #104d75);
  border: 1px solid #09081b7a;
  text-decoration: none;
  box-shadow: 0px 3px 9px #09081b7a;
  border-radius: 3px;
  color: #fff;
  padding: 3px;
`;
export const BoxFilm = styled.div`
  width: 300px;
  border: 3px solid #104d75;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const Title = styled.h2`
  font-size: calc(1.375rem + 1.5vw);
  color: #fff;
  margin: 20px 0;
`;
export const Text = styled.p`
  color: #d1c4c4;
  color: #d1c4c4;
  /* width:50%; */
`;
export const TextStar = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-style: italic;
  margin: 0;
`;
export const GenresUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 15px;
`;
export const GenresItem = styled.li`
  background: linear-gradient(to bottom, #09081b7a, #6a78b2);
  box-shadow: 0px 3px 9px #09081b7a;
  border: 1px solid #09081b7a;
  border-radius: 3px;
  padding: 3px;
`;
export const Line = styled.hr`
  margin: 1rem 0;
  /* width: 80%; */
  color: inherit;
  border: 0;
  border-top: 1px solid;
  opacity: 0.25;
  --bs-text-opacity: 1;
  color: rgba((255, 255, 255), var(--bs-text-opacity)) !important;
`;
export const CastStyle = styled.div`
  position: absolute;
  top: 100%; 
  width: 95%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const CastLi = styled.li`
  padding-left: 10px;
  border-left: 4px solid #ffc107;
  position: relative;
  display: inline-block;
  list-style: none;
`;
export const CastLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: calc(1.3rem + 0.6vw);
`;
export const Option = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
`;
