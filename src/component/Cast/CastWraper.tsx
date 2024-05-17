import React from "react";
import styled from "styled-components";

// Стилізована обгортка
const Wrapper = styled.div`
  padding: 20px;
  overflow-x: scroll;
`;


const CastWrapper = ({ children }:any) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default CastWrapper;
