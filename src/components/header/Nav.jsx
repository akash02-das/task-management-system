import { Link } from 'react-router-dom';

import Account from './Account';

const Nav = () => {
  return (
    <nav className='h-20 flex flex-col sm:flex-row bg-white fixed left-0 right-0 top-0 border-solid border-b-2 border-gray-200'>
      <ul className='w-1/2 h-16 list-none flex items-center font-bold ml-6 sm:ml-8'>
        <li>
          <Link to='/' className='flex justify-center items-center'>
            <h3 className='text-md sm:text-xl font-bold text-blue-700'>
              GenNext
            </h3>
          </Link>
        </li>
        <li className='mx-4 sm:mx-8'>
          <Link to='/dashboard'>
            <h3 className='text-sm sm:text-lg font-bold text-gray-700'>
              Dashboard
            </h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
