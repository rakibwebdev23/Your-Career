import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

const AppliedJobsDetails = ({ job }) => {
    const { company_name, job_title, salary, location, logo, remote_or_onsite, job_type } = job;
    return (
        <div className="items-center justify-between p-4 border rounded-md gap-6 mt-6 bg-gray-100 flex drop-shadow-lg">
            <div className="flex gap-6 mr-0">
                <div>
                    <img className="w-44 h-32 bg-slate-200 p-2 rounded-md" src={logo} alt="" />
                </div>
                <div className="text-wrap">
                    <p className="text-xl font-bold ">{job_title}</p>
                    <p className="text-slate-500 font-semibold text-xl mb-1">{company_name}</p>
                    <div className="flex gap-4">
                        <button className="font-bold border border-indigo-600 py-1 px-4 text-indigo-600 rounded-md hover:text-white hover: hover:bg-indigo-500">{remote_or_onsite}</button>
                        <button className="font-bold border border-indigo-600 py-1 px-4 text-indigo-600 rounded-md hover:text-white hover: hover:bg-indigo-500">{job_type}</button>
                    </div>
                    <div className="flex gap-6 mt-1 text-slate-500">
                        <p className="flex items-center gap-1 mx-auto"><CiLocationOn className="text-xl font-bold text-gray-600"></CiLocationOn> {location}</p>
                        <p className="flex items-center gap-1 ml-0 pl-0"><CiDollar className="text-xl font-bold text-gray-600"></CiDollar> {salary}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className=" text-white font-bold py-2 px-4 rounded-md  bg-gradient-to-r from-blue-400 to-indigo-600 hover:from-pink-500 hover:to-indigo-500">View Details</button>
            </div>
        </div>
    );
};

export default AppliedJobsDetails;