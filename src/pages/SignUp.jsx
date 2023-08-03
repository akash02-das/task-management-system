import signupImage from '../assets/images/signup.svg';
import SignUpForm from '../components/auth/SignUpForm';

const SignUp = () => {
  return (
    <>
      <h1 className='text-2xl sm:text-4xl text-gray-900 font-bold'>
        Create an account
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='py-20 px-8'>
          <img src={signupImage} alt='SignUp Image' className='max-w-[80%]' />
        </div>

        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;
