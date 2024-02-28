import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Main from "./pages/main";
import ProjectTasks from "./pages/project-tasks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project-tasks" element={<ProjectTasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
