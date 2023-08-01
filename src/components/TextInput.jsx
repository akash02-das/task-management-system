const TextInput = ({ icon, ...rest }) => {
  return (
    <div className='w-full h-14 bg-white flex items-center rounded-sm border-solid border-b-2 border-gray-200 p-1 mb-4'>
      <input
        {...rest}
        className='border-none outline-none w-full h-full py-1 px-3 bg-white text-lg font-medium'
      />
      <span className='w-10 h-10 text-xl flex justify-center items-center'>
        {icon}
      </span>
    </div>
  );
};

export default TextInput;
