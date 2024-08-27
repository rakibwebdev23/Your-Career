import { useState } from "react";
import Job from "../Job/Job";
import useHook from "../hook/useHook";
import BannerShared from "../shared/BannerShared/BannerShared";
import featureImg from "../../assets/images/feature.jpg";

const FeaturedjobsData = () => {

    const [jobsData] = useHook();
    const [showAllData, setShowAllData] = useState(4);

    return (
        <div className="mt-20">
            <BannerShared
                img={featureImg}
                title={"Featured Job's"}
                description={"A successful career is built on a foundation of understanding your interests, skills, and values, while aligning them with opportunities in the job market. It involves continuous learning, skill development, and adaptability to changes in industry trends. Whether you’re just starting out or looking to make a career shift. Your career path should be one that not only offers professional growth but also aligns with your personal aspirations and work-life."}
            ></BannerShared>
            <div className="mt-20">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {
                        jobsData.slice(0, showAllData).map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                    }
                </div>
                <div className={`text-center mt-10 mb-4 ${showAllData === jobsData.length ? 'hidden' : ''}`}>
                    <button onClick={() => setShowAllData(jobsData.length)} className="btn btn-primary hover:bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 border-none text-white font-bold text-xl">Show All</button>
                </div>
            </div>
        </div>

    );
};

export default FeaturedjobsData;