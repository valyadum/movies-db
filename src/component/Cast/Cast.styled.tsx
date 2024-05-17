import styled from "@emotion/styled";
export const BoardCard = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  padding: 0;
  margin-bottom: 20px;
`;
export const CardActor = styled.li`
  list-style: none;
  display: flex;
  background: linear-gradient(to bottom, #5367ff, #104d75);
  border: 1px solid #09081b7a;
  flex-direction: row;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  /* padding-right: 30px; */
  margin: 0 5px;
 min-width: 300px;
  align-items: center;
`;
export const ImgCard = styled.img`
  display: inline-block;

  margin-right: 5px;
  border: 4px solid #5367ff;
  border-radius: 50%;
  object-fit: cover;
  width: 70px;
  height: 70px;
`;
export const Name = styled.p`
  margin: 0;
`;
