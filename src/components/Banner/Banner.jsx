import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/friendly-ceo-desk.jpg"

const Banner = () => {
    return (
        <div className="md:flex gap-6 items-center mt-20 mb-6 sm:mb-8">
            <div className="text-wrap">
                <p className="text-6xl font-bold mb-4">One Step Closer <br /> <span className="text-orange-500">To</span> <br /> Your <span className=" text-blue-500">Dream Job</span> </p>
                <p className="text-xl text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. <br></br> Manage all your job application from start to finish.</p>
                <div>
                    <Link to="/register"><button className="mt-6 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 px-4 py-4 pt-2 pb-2 rounded-md text-xl text-white font-semibold sm:mb-8 sm:pt-2">Get Started</button></Link>
                </div>
            </div>
            <div>
                <img className="max-w-xl rounded-md" src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;