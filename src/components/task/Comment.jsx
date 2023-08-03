import axios from 'axios';
import { useFormik } from 'formik';
import { FaComments, FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

import useTasks from '../../hooks/useTasks';
import { commentSchema } from '../../schemas';
import { currentUser } from '../../utils/getAuth';

const Comment = ({ id }) => {
  const { tasks } = useTasks(`http://localhost:8080/tasks/${id}`);

  const initialValues = {
    comment: '',
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: commentSchema,
    onSubmit: (values, action) => {
      commentHandler(values, action);
    },
  });

  const commentHandler = async (values, action) => {
    const data = [
      ...tasks.comments,
      {
        sender: currentUser(),
        comment: values.comment,
      },
    ];

    try {
      await axios.patch(`http://localhost:8080/tasks/${id}`, {
        comments: data,
      });

      action.resetForm();
      toast.success('Comment sent successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Comment sending failed!');
    }
  };

  return (
    <div className='my-10'>
      <form onSubmit={handleSubmit}>
        <textarea
          type='textarea'
          name='comment'
          value={values.comment}
          onChange={handleChange}
          placeholder='Add a comment...'
          className={`bg-gray-100 border text-gray-900 rounded-md border-gray-500 outline-gray-500 focus:border-none block w-full p-2 h-18 text-lg font-medium my-4`}
        />
        {errors.comment ? (
          <p className='text-red-500 text-sm mb-4'>{errors.comment}</p>
        ) : null}
        <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-blue-600 hover:bg-gray-700 text-white font-semibold hover:text-white py-1.5 px-6 border border-blue-500 hover:border-transparent rounded'
          >
            Submit
          </button>
        </div>
      </form>

      <div>
        <div className='flex items-center text-xl text-gray-700'>
          <FaComments />
          <span className='ml-2'>Comments</span>
        </div>
        {tasks?.comments?.map((comment) => (
          <div key={Math.random()} className='bg-gray-200 p-3 rounded my-2'>
            <p className='flex items-center'>
              <FaUserCircle />
              <span className='text-blue-500 font-bold ml-2'>
                {comment.sender}
              </span>
            </p>
            <p className='ml-6 my-1'>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
