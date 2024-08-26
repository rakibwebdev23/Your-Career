import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FeaturedJobBanner from "../FeaturedJobBanner/FeaturedJobBanner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import Loader from "../Loader/Loader";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Home</title>
            </Helmet>
            <Loader></Loader>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobBanner></FeaturedJobBanner>
            <FeaturedJobs></FeaturedJobs>            
        </div>
    );
};

export default Home;