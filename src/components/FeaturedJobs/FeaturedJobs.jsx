import { useEffect, useState } from "react";
import Job from "../Job/Job";
import CategoryBanner from "../CategoryBanner/CategoryBanner";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [showAllData, setShowAllData] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="mt-20">
                {/* <div className="text-center text-wrap">
                    <h4 className="text-4xl text-black font-bold mb-2">Featured Jobs</h4>
                    <p className="text-xl text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div> */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {
                        jobs.slice(0, showAllData).map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                    }
                </div>
                <div className={`text-center mt-10 mb-4 ${showAllData === jobs.length ? 'hidden' : ''}`}>
                    <button onClick={() => setShowAllData(jobs.length)} className="btn btn-primary hover:bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 border-none text-white font-bold text-xl">Show All</button>
                </div>
            </div>
        </div>

    );
};

export default FeaturedJobs;