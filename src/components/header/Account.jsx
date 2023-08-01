import { Link, useNavigate } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';
import { currentUser, getAuth } from '../../utils/getAuth';

const Account = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div className='w-1/2 flex gap-4 justify-end items-center mr-8 text-md'>
      {getAuth() ? (
        <>
          <span title='Account'>
            <FaUserCircle size='24px' />
          </span>
          <span className='text-lg text-gray-900'>{currentUser()}</span>
          <button
            onClick={logoutHandler}
            className='bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-1 px-3 border border-gray-500 hover:border-transparent rounded'
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to='/signup'>
            <span className='text-lg text-gray-900'>Signup</span>
          </Link>
          <Link to='/login'>
            <span className='text-lg text-gray-900'>Login</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default Account;
