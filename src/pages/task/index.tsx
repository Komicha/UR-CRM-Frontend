import Description from "components/Description";
import Executor from "components/Executor";
import Header from "components/Header";
import TaskBtn from "components/TaskBtn";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

const StyledTaskInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;



const Task = () => {
    return (
        <StyledWrapper>
            <StyledTaskInfo>
                <Executor />
                <Description />
            </StyledTaskInfo>
            <TaskBtn />
        </StyledWrapper>
    );
};

export default Task;