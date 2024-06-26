import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
`;

export const BoxFilm = styled.li`
  width: 200px;
  border: 3px solid #104d75;
  position: relative;
  text-decoration: none;
  transition: transform 0.25s;
  &:hover {
    transform: scale(1.1);
  }
`;
export const BoardFilm = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  /* padding: 60px 60px; */
  gap: 20px;
  margin: 16px 16px 0 0;

`;
export const FilmName = styled.p`
  position: absolute;
  background: linear-gradient(to top, #0c0f21, #00000040);
  text-align: center;
  right: 0;
  width: 100%;
  z-index: 2;
  bottom: 0;
  color: #fff;
  padding-bottom: 10px;
  padding-top: 10px;
  font-weight: 600;
`;
