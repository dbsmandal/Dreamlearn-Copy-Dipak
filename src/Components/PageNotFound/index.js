
const PageNotFound = () => {

    return (
        <>
            <div className=" w-8/12 m-auto rounded-md border shadow-md shadow-purple-500 mt-20 mb-5 ">
                <div className="mt-10 w-8/12 m-auto flex flex-col justify-center items-center bg-white">
                    <h1 className=" text-9xl font-extrabold text-purple-900 tracking-widest m-auto">404</h1>
                    <div className="bg-white px-2 text-xl text-purple-500 rounded rotate-12 absolute shadow-sm shadow-purple-500">
                        Page Not Found
                    </div>
                    <button className="mt-5 mb-10">
                        <a
                            className="relative inline-block text-sm font-medium text-purple-600 group active:text-white focus:outline-none focus:ring"
                        >
                            <span
                                className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-purple-600 group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>

                        </a>
                    </button>
                </div>

            </div>

        </>
    )
}
export default PageNotFound;