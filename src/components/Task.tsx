import React from "react";
import styled from "styled-components";

import AvatarIMG from "static/img/avatar.png";
import ArrowSVG from "static/svg/arrow.svg";

const StyledContainer = styled.div`
  height: 136px;
  width: 100%;
  background-color: #19212b;
  border-radius: 8px;
  margin-top: 16px;
  border-left: 8px solid white;
  padding: 16px;
  box-sizing: border-box;
`;

const StyledTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const StyledDescription = styled.div`
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 4px;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledAvatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin-right: 10px;
`;

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #969696;
`;

const StyledArrow = styled.div`
  width: 18px;
  height: 18px;

  background-image: url("${ArrowSVG}");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Task = () => {
  return (
    <StyledContainer>
      <StyledTitle>Подготовить отчет</StyledTitle>
      <StyledDescription>
        Повседневная практика показывает, что рамки и место обучения кадров
        12321321312321213321312321213213421 421421
      </StyledDescription>
      <StyledWrapper>
        <StyledInfo>
          <StyledAvatar src={AvatarIMG} />
          27 Июля
        </StyledInfo>
        <StyledArrow />
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Task;
