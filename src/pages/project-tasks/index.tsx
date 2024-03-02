import Header from "components/Header";
import NoTasks from "components/NoTasks";
import AddTask from "components/AddTask";
import Task from "components/Task";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const StyledContainer = styled.div`
  padding-bottom: 34px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ProjectTasks = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <AddTask />
      <NoTasks />
      <StyledLink to="/task">
        <Task taskState="full" />
      </StyledLink>
      <StyledLink to="/task">
        <Task taskState="middle" />
      </StyledLink>
      <StyledLink to="/task">
        <Task taskState="low" />
      </StyledLink>
    </StyledContainer>
  );
};

export default ProjectTasks;
