import { SlClose } from 'react-icons/sl';

const Modal = ({ children, title, visible, closeModal }) => {
  const handleCloseModal = (e) => {
    if (e.target.id === 'container') closeModal();
  };

  if (!visible) return null;

  return (
    <div
      id='container'
      onClick={handleCloseModal}
      className='fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center'
    >
      <div className='bg-white p-4 rounded w-1/2'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-semibold text-gray-700'>{title}</h1>
          <span onClick={closeModal} className='cursor-pointer'>
            <SlClose size='24px' />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
