import { useEffect } from "react";
import { useState } from "react";
import CategoryList from "../CategoryList/CategoryList";
import CategoryBanner from "../CategoryBanner/CategoryBanner";

const JobCategoryList = () => {

    const [categoryLists, setCategoryLists] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategoryLists(data))
    }, [])

    return (
        <div className="mt-32">
            <CategoryBanner></CategoryBanner>
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