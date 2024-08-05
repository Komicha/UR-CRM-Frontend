import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchTasks } from "../features/tasks/tasksSlice";
import styled from "styled-components";

const TaskList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const taskStatus = useSelector((state: RootState) => state.tasks.status);
  const error = useSelector((state: RootState) => state.tasks.error);

  /*useEffect(() => {
    if (taskStatus === "idle") {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);*/

  let content;
  if (taskStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (taskStatus === "succeeded") {
    content = tasks.map((task) => (
      <TaskItem key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </TaskItem>
    ));
  } else if (taskStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <TaskContainer>{content}</TaskContainer>;
};

export default TaskList;

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 15px;
  width: 100%;
`;
