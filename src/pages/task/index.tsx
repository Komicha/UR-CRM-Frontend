import Description from "components/Description";
import Executor from "components/Executor";
import Header from "components/Header";
import TaskBtn from "components/TaskBtn";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100vh;
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

const StyledContainer = styled.div`

`;

const Task = () => {
    return (
        <StyledWrapper>
            <StyledContainer>
                <Header />
                <StyledTaskInfo>
                    <Executor />
                    <Description />
                </StyledTaskInfo>
            </StyledContainer>
            <StyledWrapperBtn>
                <TaskBtn title="Остановить" />
                <TaskBtn title="Завершить" />
            </StyledWrapperBtn>
        </StyledWrapper>
    );
};

export default Task;
