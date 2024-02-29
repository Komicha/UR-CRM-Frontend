import Header from "components/Header";
import NoTasks from "components/NoTasks";
import AddTask from "components/AddTask";
import Task from "components/Task";

const ProjectTasks = () => {
  return (
    <div>
      <Header />
      <AddTask />
      <NoTasks />
      <Task />
    </div>
  );
};

export default ProjectTasks;
