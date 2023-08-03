const Details = ({ name, description, status, dueDate, assignee }) => {
  return (
    <div>
      <h1 className='text-3xl text-gray-700 font-bold'>Task details</h1>
      <div className='border-2 border-gray-300 my-2'></div>

      <div className='flex items-center justify-between'>
        <div className='my-10'>
          <h1 className='text-2xl text-blue-500 font-bold'>{name}</h1>

          <div className='my-5'>
            <p className='text-lg text-gray-500'>Description</p>
            <p className='text-lg text-gray-700'>{description}</p>
          </div>
        </div>

        <div className='bg-white p-8 rounded shadow-lg'>
          <p className='my-2'>
            <span className='text-lg text-gray-500 mr-2'>Status:</span>
            <span className='text-lg text-bold text-blue-500'>{status}</span>
          </p>
          <p className='my-2'>
            <span className='text-lg text-gray-500 mr-2'>Assignee:</span>
            <span className='text-lg text-bold text-blue-500'>{assignee}</span>
          </p>
          <p className='my-2'>
            <span className='text-lg text-gray-500 mr-2'>Due date:</span>
            <span className='text-lg text-bold text-blue-500'>{dueDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
