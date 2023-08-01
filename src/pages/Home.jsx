import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex justify-center mt-32'>
      <div className='w-2/4 h-80 bg-slate-300 rounded-md flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-gray-800 mb-6'>Task Management System</h1>

        <span className='text-lg mb-6 text-gray-600 font-bold'>
          Log in to continue
        </span>

        <div className='flex w-52 justify-around'>
          <Link to='/signup'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Sign Up
            </button>
          </Link>
          <Link to='/login'>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
