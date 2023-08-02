import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string().min(8).required('Please enter your password'),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string().required('Please enter your password'),
});

export const createTaskSchema = Yup.object({
  name: Yup.string().required('Please enter name'),
  description: Yup.string().required('Please enter description'),
  status: Yup.string().required('Please choose a status'),
  assignee: Yup.string().required('Please choose an assignee'),
});
