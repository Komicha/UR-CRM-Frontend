import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Main from "./pages/main";
import ProjectTasks from "./pages/project-tasks";
import styled from "styled-components";
declare global {
  interface Window {
    Telegram: any;
  }
}


const StyledContainer = styled.div`
  margin: 0px auto;
  width: 343px;
  padding: 0px 19px;
`;

function App() {

  return (
    <StyledContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project-tasks" element={<ProjectTasks />} />
        </Routes>
      </BrowserRouter>
    </StyledContainer>
  );
}

export default App;
