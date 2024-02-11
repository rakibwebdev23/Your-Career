import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobInStorage } from "../../utilities/storage";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";

const AppliedJobs = () => {
    const totalJobs = useLoaderData();
    const [apply, setJobsApplied] = useState([]);
    const [displayApply, setDisplayApply] = useState([]);
    console.log(totalJobs);

    useEffect(() => {
        const storedJobs = getJobInStorage();
        if (totalJobs.length > 0) {

            const jobsApplied = [];
            for (const id of storedJobs) {
                const job = totalJobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setDisplayApply(jobsApplied);
            setJobsApplied(jobsApplied);
        }
    }, [totalJobs]);

    const handleJobsDropdown = filter =>{
        if(filter === 'all'){
            setDisplayApply(apply);
        }
        else if(filter === 'Remote'){
            const remoteJobs = apply.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayApply(remoteJobs);
        }
        else if(filter === 'Onsite'){
            const onsiteJobs = apply.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayApply(onsiteJobs);
        }
    }

    return (
        <div>
            <div className="bg-gray-50 rounded-t-md h-60  flex items-center">
                <p className="mx-auto text-2xl font-bold">Applied Jobs</p>
            </div>
            <div className="flex">
                <details className="dropdown mb-10 mx-auto">
                    <summary className="m-1 btn">Open or Close</summary>
                    <ul className="p-2shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-64">
                        <div className="flex gap-2 bg-slate-200 p-1 rounded-md">
                            <li onClick={() => handleJobsDropdown('all')}><a>All</a></li>
                            <li onClick={() => handleJobsDropdown('Remote')}><a>Remote</a></li>
                            <li onClick={() => handleJobsDropdown('Onsite')}><a>Full Time</a></li>
                        </div>
                    </ul>
                </details>
            </div>
            <div className="mt-10">
                {
                    displayApply.map(job => <AppliedJobsDetails

                        key={job.id}
                        job={job}
                    ></AppliedJobsDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;