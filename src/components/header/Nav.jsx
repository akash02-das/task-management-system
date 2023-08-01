import { Link } from 'react-router-dom';

import Account from './Account';

const Nav = () => {
  return (
    <nav className='flex bg-white fixed left-0 right-0 top-0 border-solid border-b-2 border-gray-200'>
      <ul className='w-1/2 h-16 list-none flex justify-between items-center font-bold ml-8'>
        <li>
          <Link to='/' className='flex justify-center items-center'>
            <h3 className='text-xl font-bold text-blue-700'>GenNext TMS</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
