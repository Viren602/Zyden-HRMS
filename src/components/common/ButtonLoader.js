const ButtonLoader = () => {
    return (
        <button className="buttonload group relative btn btn-red text-xl border text-white focus:outline-none">
            <span className="absolute left-[15px] flex items-center ">
                <i className="fa fa-spinner fa-spin text-white text-[17px]"></i>
            </span>
            <span className="ml-8">
                Loading
            </span>
        </button>
    );
};

export default ButtonLoader;