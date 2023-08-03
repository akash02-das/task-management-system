import moment from 'moment';

const Task = ({ task }) => {
  const { name, dueDate, status } = task;
  const showDueDate = moment(dueDate).format('DD-MMM-YYYY');

  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg cursor-pointer border border-gray-300'>
      <div className='px-6 pt-4'>
        <div className='text-gray-700 font-bold text-lg mb-2'>{name}</div>
      </div>
      <div className='flex justify-between px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {showDueDate}
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {status}
        </span>
      </div>
    </div>
  );
};

export default Task;
