const Button = ({ children, width, ...rest }) => {
  return (
    <button
      className={`${width} bg-green-400 hover:bg-gray-800 text-gray-900 hover:text-white py-3 px-5 font-semibold text-lg flex justify-center items-center rounded-lg border-none cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;