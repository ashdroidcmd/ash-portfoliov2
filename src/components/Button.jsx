const Button = ({ title }) => {
  return (
    <>
      <button className="custom-hover btn btn-outline rounded-full border-2 border-blue-600 px-8 py-4 text-lg text-blue-600 transition duration-700 ease-in-out hover:scale-110 hover:bg-blue-600 hover:text-black md:text-2xl">
        {title}
      </button>
    </>
  );
};

export default Button;
