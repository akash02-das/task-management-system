import { FaUserCircle } from 'react-icons/fa';

const Account = () => {
  return (
    <div className='w-1/2 flex gap-4 justify-end items-center mr-8 text-md'>
      <span title='Account'>
        <FaUserCircle size='24px' />
      </span>
      <a href='signup.html'>Signup</a>
      <a href='signup.html'>Login</a>
    </div>
  );
};

export default Account;
