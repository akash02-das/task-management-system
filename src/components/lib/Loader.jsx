import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='w-full h-screen flex items-start justify-center'>
      <TailSpin
        height='60'
        width='60'
        color='#0891B2'
        ariaLabel='tail-spin-loading'
        radius='1'
        visible={true}
      />
    </div>
  );
};

export default Loader;
