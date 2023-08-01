import axios from 'axios';
import { useFormik } from 'formik';
import { MdOutlineAlternateEmail, MdOutlineLockPerson } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { loginSchema } from '../../schemas';
import Button from '../Button';
import TextInput from '../TextInput';

const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        loginHandler(values);
      },
    });

  const loginHandler = async (values) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/users/${values.email}`
      );
      const data = response.data;

      if (data.email === values.email && data.password === values.password) {
        sessionStorage.setItem('email', values.email);
        navigate('/dashboard');
        toast.success('Login successfully!');
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      toast.error('Login failed!');
      toast.error('Invalid credentials');
    }
  };

  return (
    <form className='h-96' onSubmit={handleSubmit}>
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
