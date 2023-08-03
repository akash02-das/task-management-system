import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTasks from '../../hooks/useTasks';
import Loader from '../lib/Loader';
import Task from './Task';

const TaskList = ({ taskList, setTaskList }) => {
  const { tasks, loading, error } = useTasks('http://localhost:8080/tasks');

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks, setTaskList]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.error(error);
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10'>
      {taskList?.map((task) => (
        <Link to={`/tasks/${task.id}`} state={task} key={task.dueDate}>
          <Task task={task} />
        </Link>
      ))}
    </div>
  );
};

export default TaskList;
