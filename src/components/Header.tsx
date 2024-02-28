import React from "react";
import styled from "styled-components";
import ProjectIMG from "static/img/img.png";

const StyledWrapper = styled.header`
  width: 100vw;
  display: flex;
  padding: 16px;
  background-color: #19212b;
`;

const StyledIMG = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

const StyledTitle = styled.div`
  height: 22px;
  max-width: 230px;
  font-weight: 600;
  font-size: 18px;
  align-self: center;
  display: inline;
  margin-left: auto;
  margin-right: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Header = () => {
  return (
    <StyledWrapper>
      <StyledIMG src={ProjectIMG} />
      <StyledTitle>
        Project Title Project Title Project Title Project Title
      </StyledTitle>
    </StyledWrapper>
  );
};

export default Header;
