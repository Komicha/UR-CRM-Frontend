import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/main";
import ProjectTasks from "./pages/project-tasks";
import Task from "./pages/task";
import UserSelectionPage from "./pages/user-selection";
import Layout from "components/Layout";




function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project-tasks" element={<ProjectTasks />} />
          <Route path="/task" element={<Task />} />
          <Route path="/user-selection" element={<UserSelectionPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
