import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { tg } from './static/constants'
import Main from "./pages/main";
import ProjectTasks from "./pages/project-tasks";
import Task from "./pages/task";
import styled from "styled-components";

import Layout from "components/Layout";
import { useEffect } from "react";




function App() {
  useEffect(() => {
    tg.ready();
  })

  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project-tasks" element={<ProjectTasks />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
