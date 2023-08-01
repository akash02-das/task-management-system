import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string().min(8).required('Please enter your password'),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string().required('Please enter your password'),
});
