import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobInStorage } from "../../utilities/storage";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";

const AppliedJobs = () => {
    const totalJobs = useLoaderData();
    const [apply, setJobsApplied] = useState([]);
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
            setJobsApplied(jobsApplied);
        }
    }, [totalJobs])

    return (
        <div>
            <div className="bg-gray-50 rounded-t-md h-60  flex items-center">
                <p className="mx-auto text-2xl font-bold">Applied Jobs</p>
            </div>
            <div className="mt-10">
                {
                    apply.map(job => <AppliedJobsDetails

                        key={job.id}
                        job={job}
                    ></AppliedJobsDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;