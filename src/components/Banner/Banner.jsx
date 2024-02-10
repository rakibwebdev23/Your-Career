const Banner = () => {
    return (
        <div className="md:flex gap-6 items-center mt-20 mb-6 text-wrap">
            <div className="">
                <p className="text-6xl font-bold mb-4">One Step Closer To Your <span className=" text-blue-500">Dream Job</span> </p>
                <p className="text-xl text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="mt-6 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 px-4 py-4 pt-2 pb-2 rounded-md text-xl text-white font-semibold sm:mb-6">Get Started</button>
            </div>
            <div>
                <img className="max-w-lg rounded-md" src="/src/assets/images/friendly-ceo-desk.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;