import Nav from './header/Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className='w-full py-16'>
        <div className='w-[90%] my-8 mx-auto'>{children}</div>
      </main>
    </>
  );
};

export default Layout;
