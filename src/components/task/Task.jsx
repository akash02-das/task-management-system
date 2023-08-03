import axios from 'axios';
import moment from 'moment';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Task = ({ task }) => {
  const { name, dueDate, status, id } = task;
  const [showStatus, setShowStatus] = useState(status);

  const showDueDate = moment(dueDate).format('DD-MMM-YYYY');

  const statusArray = ['To Do', 'In Progress', 'Complete'];
  const filterStatus = statusArray.filter((item) => item !== showStatus);

  const handleChangeStatus = async (e) => {
    setShowStatus(e.target.value);
    try {
      await axios.patch(`http://localhost:8080/tasks/${id}`, {
        status: e.target.value,
      });

      toast.success('Task status updated successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Task status update failed!');
    }
  };

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg cursor-pointer border border-gray-300 pb-4'>
      <div className='px-6 pt-4'>
        <div className='text-gray-700 font-bold text-lg mb-2'>{name}</div>
      </div>
      <div className='flex justify-between items-center px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
          {showDueDate}
        </span>

        <div>
          <select
            value={showStatus}
            onChange={(e) => handleChangeStatus(e)}
            className='bg-gray-50 border border-gray-300 text-gray-700 text-md rounded-md block w-full p-2'
          >
            <option defaultValue={showStatus}>{showStatus}</option>
            {filterStatus?.map((item) => (
              <option key={Math.random()} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Task;
