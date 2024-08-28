import { useEffect } from "react";
import { useState } from "react";
import CategoryList from "../CategoryList/CategoryList";
import BannerShared from "../shared/BannerShared/BannerShared";
import img from "../../assets/images/category.jpg"

const JobCategoryList = () => {

    const [categoryLists, setCategoryLists] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategoryLists(data))
    }, [])

    return (
        <div className="mt-32">
            <BannerShared
                img={img}
                title={"Job Category"}
                description={"To achieve a successful career, focus on gaining relevant skills, setting clear goals, and continuously learning. Start by identifying a job that aligns with your interests and values, then work diligently to build experience and expertise in that role. Stay adaptable and seek opportunities for growth, ensuring each step you take brings you closer to your long-term career aspirations"}
            ></BannerShared>
            <div className="text-center text-wrap mb-6 mt-16">
                <h4 className="text-4xl text-black font-bold">Job Category List</h4>
                <p className="text-xl mt-2 text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-4 mt-4 mb-4 items-center mx-auto">
                {
                    categoryLists.map(categoryList => <CategoryList
                        key={categoryList.id}
                        categoryList={categoryList}
                    ></CategoryList>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;