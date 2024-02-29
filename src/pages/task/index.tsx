import Description from "components/Description";
import Executor from "components/Executor";
import Header from "components/Header";
import TaskBtn from "components/TaskBtn";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledTaskInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const StyledWrapperBtn = styled.div`
    display:flex;
    gap:3px;
`;


const Task = () => {
    return (
        <StyledWrapper>
            <Header />
            <StyledTaskInfo>
                <Executor />
                <Description />
            </StyledTaskInfo>
            <StyledWrapperBtn>
                <TaskBtn title="Остановить" />
                <TaskBtn title="Завершить" />
            </StyledWrapperBtn>

        </StyledWrapper>
    );
};

export default Task;