import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ProjectList from "./components/ProjectList";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Task Tracker</h1>
        <ProjectList />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
