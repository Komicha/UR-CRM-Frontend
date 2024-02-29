import Header from "components/Header";
import NoTasks from "components/NoTasks";
import AddTask from "components/AddTask";
import Task from "components/Task";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding-bottom: 34px;
`;

const ProjectTasks = () => {
  return (
    <StyledContainer>
      <Header />
      <AddTask />
      <NoTasks />
      <Task taskState="full" />
      <Task taskState="middle" />
      <Task taskState="low" />
    </StyledContainer>
  );
};

export default ProjectTasks;
