import Description from "components/Description";
import Executor from "components/Executor";
import TaskBtn from "components/TaskBtn";
import styled from "styled-components";
import Pause from "../../static/svg/pause.svg"
import Complete from "../../static/svg/complete.svg"
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100vh;
  color: var(--tg-theme-text-color);
`;

const StyledTaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`;

const StyledWrapperBtn = styled.div`
  display: flex;
  gap: 3px;
`;

const StyledContainer = styled.div``;

const Task = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledTaskInfo>
          <Executor />
          <Description />
        </StyledTaskInfo>
      </StyledContainer>
      <StyledWrapperBtn>
        <TaskBtn title="Остановить" icon={Pause} />
        <TaskBtn title="Завершить" icon={Complete} />
      </StyledWrapperBtn>
    </StyledWrapper>
  );
};

export default Task;
