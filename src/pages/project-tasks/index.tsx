import NoTasks from "components/NoTasks";
import AddTask from "components/AddTask";
import Task from "components/Task";
import styled from "styled-components";

import { tg } from "../../static/constants";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const StyledContainer = styled.div`
  padding-bottom: 34px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ProjectTasks = () => {
  tg.BackButton.show();

  const tasks = useSelector((state: RootState) => state.tasksState.tasks);

  return (
    <StyledContainer>
      <AddTask />
      <NoTasks />
      {tasks.map((task) => {
        return (
          <StyledLink to="/task">
            <Task task={task} />
          </StyledLink>
        );
      })}
    </StyledContainer>
  );
};

export default ProjectTasks;
