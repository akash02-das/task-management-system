const Button = ({ children, width, ...rest }) => {
  return (
    <button
      className={`${width} bg-blue-400 hover:bg-gray-800 text-gray-900 hover:text-white py-3 px-5 my-4 font-semibold text-lg flex justify-center items-center rounded-lg border-none cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
