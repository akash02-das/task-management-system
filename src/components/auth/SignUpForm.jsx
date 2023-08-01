import axios from 'axios';
import { useFormik } from 'formik';
import { MdOutlineAlternateEmail, MdOutlineLockPerson } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { signUpSchema } from '../../schemas';
import Button from '../Button';
import TextInput from '../TextInput';

const SignUpForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        signupHandler(values, action);
      },
    });

  const signupHandler = async (values, action) => {
    const { email, password } = values;
    const response = await axios.get('http://localhost:8080/users');
    const users = response.data;

    const isExistUser = () => {
      const booleanArray = users?.map((user) =>
        user.email === values.email ? true : false
      );

      if (booleanArray.includes(true)) {
        return true;
      } else {
        return false;
      }
    };

    if (isExistUser()) {
      toast.error('This email is already in use!');
    } else {
      try {
        await axios.post('http://localhost:8080/users', {
          id: email,
          email,
          password,
        });

        action.resetForm();
        navigate('/login');
        toast.success('Signup successfully!');
      } catch (error) {
        console.error(error);
        toast.error('Signup failed!');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className='h-96'>
      <TextInput
        type='text'
        name='email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter email'
        icon={<MdOutlineAlternateEmail />}
        errors={errors.email}
        touched={touched.email}
      />
      <TextInput
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter password'
        icon={<MdOutlineLockPerson />}
        errors={errors.password}
        touched={touched.password}
      />

      <Button type='submit' width='w-full'>
        <span>Sign Up Now</span>
      </Button>

      <div className='text-center mt-4 text-gray-900'>
        Already have an account?{' '}
        <Link to='/login' className='text-blue-600'>
          Login
        </Link>{' '}
        instead.
      </div>
    </form>
  );
};

export default SignUpForm;
