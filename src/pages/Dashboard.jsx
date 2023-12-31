import { useState } from 'react';
import Modal from '../components/lib/Modal';
import TaskForm from '../components/task/TaskForm';
import TaskList from '../components/task/TaskList';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className='flex justify-end'>
        <button
          type='button'
          onClick={openModalHandler}
          className='bg-blue-600 hover:bg-gray-700 text-white font-semibold hover:text-white py-1.5 px-6 border border-blue-500 hover:border-transparent rounded'
        >
          Create task
        </button>
      </div>

      <TaskList taskList={taskList} setTaskList={setTaskList} />

      <Modal
        title='Create task'
        visible={showModal}
        closeModal={closeModalHandler}
      >
        <TaskForm
          closeModal={closeModalHandler}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;
