import { Fragment } from "react/jsx-runtime";
import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import GlobalStyles from "./theme/globalStyle";

import Main from "./pages/main";
import ProjectTasks from "./pages/project-tasks";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project-tasks" element={<ProjectTasks />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
