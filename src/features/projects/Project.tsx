import React from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../tasks/tasksSlice";
import styled from "styled-components";

interface ProjectProps {
  project: {
    id: number;
    name: string;
  };
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const tasks = fetchTasks(project.id);
    console.log(tasks);
  };

  return <ProjectItem onClick={handleClick}>{project.name}</ProjectItem>;
};

const ProjectItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
