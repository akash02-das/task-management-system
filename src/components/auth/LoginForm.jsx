import { MdOutlineAlternateEmail, MdOutlineLockPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Button from '../Button';
import TextInput from '../TextInput';

const LoginForm = () => {
  return (
    <form className='h-96'>
      <TextInput
        type='text'
        placeholder='Enter email'
        icon={<MdOutlineAlternateEmail />}
      />
      <TextInput
        type='password'
        placeholder='Enter password'
        icon={<MdOutlineLockPerson />}
      />
      <Button type='submit' width='w-full'>
        <span>Login Now</span>
      </Button>

      <div className='text-center mt-4 text-gray-900'>
        {`Don't have an account?`}{' '}
        <Link to='/signup' className='text-blue-600'>
          SignUp
        </Link>{' '}
        instead.
      </div>
    </form>
  );
};

export default LoginForm;
