import { Link } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';

const Account = () => {
  return (
    <div className='w-1/2 flex gap-4 justify-end items-center mr-8 text-md'>
      <span title='Account'>
        <FaUserCircle size='24px' />
      </span>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
    </div>
  );
};

export default Account;
