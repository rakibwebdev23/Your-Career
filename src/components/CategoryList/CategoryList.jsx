const CategoryList = ({categoryList}) => {
    const {category_name, logo, availability} = categoryList;
    return (
        <div className="text-left max-w-6xl mt-12 mb-8 mx-auto hover:drop-shadow-lg bg-gray-50 p-2 rounded-sm">
            <img className="w-20 h-20 rounded-md" src={logo} alt="" />
            <p className="font-bold text-xl">{category_name}</p>
            <p className="text-lg text-gray-400">{availability}</p>
        </div>
    );
};

export default CategoryList;