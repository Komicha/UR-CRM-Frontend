import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  background-color: #19212b;
  border-radius: 12px;
  height: 44px;
  margin-top: 16px;
  color: #758398;
  font-size: 14px;
`;

const StyledPlus = styled.div`
  font-size: 33px;
  font-weight: 300;
  margin: 0 18px 0 18px;
`;

const AddTask = () => {
  return (
    <StyledContainer>
      <StyledPlus>+</StyledPlus>
      <div>Добавить задачу</div>
    </StyledContainer>
  );
};

export default AddTask;
