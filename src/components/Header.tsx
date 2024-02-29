import React from "react";
import styled from "styled-components";
import ProjectIMG from "static/img/img.png";

const StyledProjectWrapper = styled.div`
  display: flex;
  padding: 16px;
`;

const StyledContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #19212b;
  width: 382px;
  margin: 0px auto;
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

const StyledTaskFilterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 31px 4px 31px;
`;

const StyledTaskFilterButton = styled.button<{ isActive?: boolean }>`
  width: 70px;
  height: 26px;
  border: none;
  background-color: ${(props) => (props.isActive ? "#262D3B" : "transparent")};
  color: ${(props) => (props.isActive ? "#3480E5" : "white")};
  font-size: 12px;
  border-radius: 10px;
`;

const Header = () => {
  return (
    <StyledContainer>
      <StyledProjectWrapper>
        <StyledIMG src={ProjectIMG} />
        <StyledTitle>
          Project Title Project Title Project Title Project Title
        </StyledTitle>
      </StyledProjectWrapper>
      <StyledTaskFilterButtons>
        <StyledTaskFilterButton isActive>Пауза</StyledTaskFilterButton>
        <StyledTaskFilterButton>В работе</StyledTaskFilterButton>
        <StyledTaskFilterButton>В ревью</StyledTaskFilterButton>
        <StyledTaskFilterButton>Готово</StyledTaskFilterButton>
      </StyledTaskFilterButtons>
    </StyledContainer>
  );
};

export default Header;
