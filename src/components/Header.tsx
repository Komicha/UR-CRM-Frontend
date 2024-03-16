import React from "react";
import styled from "styled-components";
import ProjectIMG from "static/img/img.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { setFilter } from "store/tasks/taskCardFilter";
import { useLocation } from "react-router-dom";

const StyledProjectWrapper = styled.div`
  display: flex;
  padding: 16px;
  color: var(--tg-theme-text-color);
`;

const StyledContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--tg-theme-bg-color);
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
  background-color: ${(props) =>
    props.isActive ? "var(--tg-theme-secondary-bg-color)" : "transparent"};
  color: ${(props) =>
    props.isActive
      ? "var(--tg-theme-accent-text-color)"
      : "var(--tg-theme-text-color)"};
  font-size: 12px;
  border-radius: 10px;
`;

const Header = () => {
  const currentFilter = useSelector(
    (state: RootState) => state.filterState.value
  );
  const dispatch = useDispatch();

  const location = useLocation();

  return (
    <StyledContainer>
      <StyledProjectWrapper>
        <StyledIMG src={ProjectIMG} />
        <StyledTitle>
          Project Title Project Title Project Title Project Title
        </StyledTitle>
      </StyledProjectWrapper>
      {location.pathname === "/project-tasks" && (
        <StyledTaskFilterButtons>
          <StyledTaskFilterButton
            onClick={() => dispatch(setFilter("pause"))}
            isActive={currentFilter === "pause"}
          >
            Пауза
          </StyledTaskFilterButton>
          <StyledTaskFilterButton
            onClick={() => dispatch(setFilter("work"))}
            isActive={currentFilter === "work"}
          >
            В работе
          </StyledTaskFilterButton>
          <StyledTaskFilterButton
            onClick={() => dispatch(setFilter("review"))}
            isActive={currentFilter === "review"}
          >
            В ревью
          </StyledTaskFilterButton>
          <StyledTaskFilterButton
            onClick={() => dispatch(setFilter("done"))}
            isActive={currentFilter === "done"}
          >
            Готово
          </StyledTaskFilterButton>
        </StyledTaskFilterButtons>
      )}
    </StyledContainer>
  );
};

export default Header;
