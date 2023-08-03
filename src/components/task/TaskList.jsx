import { useEffect } from 'react';
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
        <div key={task.dueDate}>
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
