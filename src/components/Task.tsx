import React from "react";
import styled from "styled-components";

import AvatarIMG from "static/img/avatar.png";
import ArrowSVG from "static/svg/arrow.svg";

import DotsFullSVG from "static/svg/dots-full.svg";
import DotsMiddleSVG from "static/svg/dots-middle.svg";
import DotsLowSVG from "static/svg/dots-low.svg";

const handleDotsState = (state: string) => {
  switch (state) {
    case "full":
      return DotsFullSVG;
    case "middle":
      return DotsMiddleSVG;
    case "low":
      return DotsLowSVG;
    default:
      return DotsLowSVG;
  }
};

const StyledContainer = styled.div`
  height: 136px;
  width: 100%;
  background-color: var(--tg-theme-bg-color);
  border-radius: 8px;
  margin-top: 16px;
  border-left: 8px solid var(--tg-theme-text-color);
  padding: 16px;
  box-sizing: border-box;
  color: var(--tg-theme-text-color);
  
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: var(--tg-theme-hint-color);
`;

const StyledArrow = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("${ArrowSVG}");
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledDots = styled.div<{ state: string }>`
  width: 30px;
  height: 10px;
  background-image: url("${(props) => handleDotsState(props.state)}");
  background-repeat: no-repeat;
  background-size: cover;
`;

type Props = {
  taskState: string;
};

const Task = (props: Props) => {
  return (
    <StyledContainer>
      <StyledTitleWrapper>
        <StyledTitle>Подготовить отчет</StyledTitle>
        <StyledDots state={props.taskState} />
      </StyledTitleWrapper>

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
