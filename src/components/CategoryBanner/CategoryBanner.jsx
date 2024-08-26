import "../CategoryBanner/CategoryBanner.css"

const CategoryBanner = () => {
    return (
        <div className="category hero h-[500px] mt-20">
            <div className="hero-content text-center">
                <div className="md:h-[250px] w-[75%] bg-black bg-opacity-40 flex items-center">
                    <div className='px-24'>
                        <h1 className="mb-5 text-5xl font-bold uppercase text-blue-500">Job Category</h1>
                        <p className="mb-5 text-white">
                            To achieve a successful career, focus on gaining relevant skills, setting clear goals, and continuously learning. Start by identifying a job that aligns with your interests and values, then work diligently to build experience and expertise in that role. Stay adaptable and seek opportunities for growth, ensuring each step you take brings you closer to your long-term career aspirations
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryBanner;