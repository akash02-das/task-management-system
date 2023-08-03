import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';

import useUsers from '../../hooks/useUsers';
import { createTaskSchema } from '../../schemas';

const TaskForm = ({ closeModal, taskList, setTaskList }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { users } = useUsers('http://localhost:8080/users');

  const initialValues = {
    name: '',
    description: '',
    assignee: '',
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: createTaskSchema,
      onSubmit: (values, action) => {
        taskCreateHandler(values, action);
      },
    });

  const taskCreateHandler = async (values, action) => {
    values['dueDate'] = selectedDate;
    values['status'] = 'To Do';

    try {
      await axios.post('http://localhost:8080/tasks', values);

      setTaskList([...taskList, values]);

      action.resetForm();
      closeModal();
      toast.success('Task created successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Task create failed!');
    }
  };

  return (
    <div className='mt-6 mb-2'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Name'
          className={`bg-gray-100 border text-gray-900 rounded-md border-gray-500 outline-gray-500 focus:border-none block w-full p-2 h-10 text-lg font-medium my-4 ${
            errors ? 'mb-1' : 'mb-4'
          }`}
        />
        {errors.name && touched.name ? (
          <p className='text-red-500 text-sm mb-4'>{errors.name}</p>
        ) : null}
        <textarea
          type='textarea'
          name='description'
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Description'
          className={`bg-gray-100 border text-gray-900 rounded-md border-gray-500 outline-gray-500 focus:border-none block w-full p-2 h-24 text-lg font-medium my-4 ${
            errors ? 'mb-1' : 'mb-4'
          }`}
        />
        {errors.description && touched.description ? (
          <p className='text-red-500 text-sm mb-4'>{errors.description}</p>
        ) : null}
        <div className='my-4'>
          <span className='text-xl text-gray-700 mr-5'>Due date:</span>
          <DatePicker
            showIcon
            selected={selectedDate}
            name='dueDate'
            value={values.dueDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat='dd/MM/yyyy'
            minDate={new Date()}
            className='bg-gray-100 text-gray-700 font-semibold rounded-md border border-gray-500'
          />
        </div>

        <div className='my-4'>
          <select
            name='assignee'
            value={values.assignee}
            onChange={handleChange}
            onBlur={handleBlur}
            className='bg-gray-50 border border-gray-300 text-gray-700 text-md rounded-md focus:border-blue-500 block w-full p-2'
          >
            <option defaultValue=''>Choose an assignee</option>
            {users?.map((user) => (
              <option key={user.id} value={user.email}>
                {user.email}
              </option>
            ))}
          </select>
          {errors.assignee && touched.assignee ? (
            <p className='text-red-500 text-sm mt-1 mb-4'>{errors.assignee}</p>
          ) : null}
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-blue-600 hover:bg-gray-700 text-white font-semibold hover:text-white py-1.5 px-6 border border-blue-500 hover:border-transparent rounded'
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
