import React from "react";
import styled from "styled-components";
import NoTasksIMG from "static/img/no-tasks.png";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  background-color: #19212b;
  margin-top: 16px;
  border-radius: 12px;
  height: 453px;
`;

const StyledIMG = styled.img`
  width: 161px;
  height: 161px;
`;

const StyledTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 12px;
  margin-top: 114px;
`;

const StyledDescription = styled.div`
  font-size: 14px;
`;

const NoTasks = () => {
  return (
    <StyledContainer>
      <StyledIMG src={NoTasksIMG} />
      <StyledTitle>Задач пока нет</StyledTitle>
      <StyledDescription>Скоро здесь появятся твои задачи</StyledDescription>
    </StyledContainer>
  );
};

export default NoTasks;
