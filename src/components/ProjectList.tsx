import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchProjects } from "../features/projects/projectsSlice";
import { Project } from "../features/projects/Project";
import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);
  const projectStatus = useSelector(
    (state: RootState) => state.projects.status
  );
  const error = useSelector((state: RootState) => state.projects.error);

  useEffect(() => {
    if (projectStatus === "idle") {
      dispatch(fetchProjects());
    }
  }, [projectStatus, dispatch]);

  let content;
  if (projectStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (projectStatus === "succeeded") {
    content = projects.map((project) => (
      <Project key={project.id} project={project} />
    ));
  } else if (projectStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <ProjectContainer>{content}</ProjectContainer>;
};

export default ProjectList;
