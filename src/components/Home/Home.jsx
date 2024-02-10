import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import Loader from "../Loader/Loader";

const Home = () => {
    return (
        <div>
            <Loader></Loader>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>            
        </div>
    );
};

export default Home;