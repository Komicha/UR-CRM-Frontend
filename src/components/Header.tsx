import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.header`
  height: 43px;
  width: 100%;

  display: flex;
`;

const StyledIMG = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

const Header = () => {
  return <StyledWrapper>test</StyledWrapper>;
};

export default Header;
