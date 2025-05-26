const Button = ({ title }) => {
    return (
        <>
            <button className="custom-hover btn btn-outline border-2 border-blue-600 text-blue-600 rounded-full px-8 py-4 text-lg md:text-2xl transition duration-700 ease-in-out hover:scale-110  hover:bg-blue-600 hover:text-black">
                {title}
            </button>
        </>
    )
}

export default Button