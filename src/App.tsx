import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main";
import ProjectTasks from "./pages/project-tasks";
import Task from "./pages/task";
import styled from "styled-components";
import { useEffect } from "react";


const StyledContainer = styled.div`
  margin: 0px auto;
  width: 343px;
  padding: 0px 19px;
`;
const tg = Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  })
  return (
    <StyledContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project-tasks" element={<ProjectTasks />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </StyledContainer>
  );
}

export default App;
