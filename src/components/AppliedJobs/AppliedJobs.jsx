import { useEffect, useState } from "react";
import { getJobInStorage } from "../../utilities/storage";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";
import { Helmet } from "react-helmet";
import useHook from "../hook/useHook";
import BannerShared from "../shared/BannerShared/BannerShared";
import img from "../../assets/images/sucess.jpg"


const AppliedJobs = () => {

    const [jobsData] = useHook();

    const [displayApply, setDisplayApply] = useState([]);

    useEffect(() => {
        const storedJobs = getJobInStorage();
        if (jobsData.length > 0) {

            const jobsApplied = [];
            for (const id of storedJobs) {
                const job = jobsData.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setDisplayApply(jobsApplied);
           
        }
    }, [jobsData]);

    return (
        <div className="mt-20">
            <Helmet><title>Applied Job</title></Helmet>
            <BannerShared
                img={img}
                title={"Applied And Success"}
                description={"We are seeking a motivated and dynamic fresher to join our team. The ideal candidate will have a strong drive to achieve targets and deliver results. In this role, you'll be responsible for supporting various projects, learning on the job, and contributing to our team’s success. A willingness to learn, a proactive attitude, and excellent communication skills are essential."}
            ></BannerShared>
            <div className="mt-20">
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