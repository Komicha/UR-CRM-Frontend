import React, { useState } from "react";
import styled from "styled-components";
import SubmitSVG from "static/svg/submit.svg";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  background-color: black;
  border-radius: 12px;
  height: 44px;
  margin-top: 16px;
  color: white;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0 18px;
`;

const StyledPlus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  font-weight: 300;
  height: 20px;
  width: 25px;
`;

const StyledActiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: black;
  border-radius: 12px;
  margin-top: 16px;
  color: white;
  font-size: 14px;

  box-sizing: border-box;
`;

const StyledTitleInput = styled.input`
  font-size: 14px;
  background-color: transparent;
  vertical-align: center;
  border: none;
  color: white;
  margin: 12px 24px 0 24px;
  &::placeholder {
    color: #758398;
  }
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

const StyledDescriptionInput = styled.input`
  font-size: 12px;
  background-color: transparent;
  margin: 12px 24px 13px 24px;
  vertical-align: center;
  border: none;
  color: white;
  &::placeholder {
    color: #758398;
  }
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

const StyledUserSelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #262d3b;
  padding: 5px 24px 10px 24px;
  font-size: 12px;
  color: #758398;
`;

const StyledUserSelectionButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 12px;
  color: #758398;
  padding: 0;
`;

const StyledSubmitButton = styled.button`
  background-image: url("${SubmitSVG}");
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  outline: none;

  width: 20px;
  height: 20px;
`;

const AddTask = () => {
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      {isActive ? (
        <StyledActiveContainer>
          <StyledTitleInput autoFocus placeholder="Добавить задачу" />
          <StyledDescriptionInput placeholder="Описание" />
          <StyledUserSelectionContainer>
            <StyledUserSelectionButton
              onClick={() => navigate("/user-selection")}
            >
              <StyledPlus>+</StyledPlus>
              <span style={{ marginLeft: "2px" }}>Назначить</span>
            </StyledUserSelectionButton>
            <StyledSubmitButton />
          </StyledUserSelectionContainer>
        </StyledActiveContainer>
      ) : (
        <StyledContainer onClick={() => setIsActive(true)}>
          <StyledPlus>+</StyledPlus>
          <div style={{ marginLeft: "18px" }}>Добавить задачу</div>
        </StyledContainer>
      )}
    </div>
  );
};

export default AddTask;
