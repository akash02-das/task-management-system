import { MdOutlineAlternateEmail, MdOutlineLockPerson } from 'react-icons/md';
import Button from '../Button';
import TextInput from '../TextInput';

const SignUpForm = () => {
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
        <span>Sign Up Now</span>
      </Button>

      <div className='text-center mt-4 text-gray-900'>
        Already have an account? Login instead.
      </div>
    </form>
  );
};

export default SignUpForm;
