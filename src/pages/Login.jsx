import loginImage from '../assets/images/login.svg';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <>
      <h1 className='text-2xl sm:text-4xl text-gray-900 font-bold'>
        Login to your account
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='py-20 px-8'>
          <img src={loginImage} alt='SignUp Image' className='max-w-[80%]' />
        </div>

        <LoginForm />
      </div>
    </>
  );
};

export default Login;
