import { Parallax } from "react-parallax";

const BannerShared = ({ img, description, title}) => {
    return (
        <Parallax strength={300} bgImage={img} bgImageAlt="the career hub">
            <div className="category hero h-[500px] mt-20">
                <div className="hero-content text-center">
                    <div className="md:h-[250px] w-[75%] bg-black bg-opacity-40 flex items-center">
                        <div className='px-24'>
                            <h1 className="mb-5 text-5xl font-bold uppercase text-blue-500">{title}</h1>
                            <p className="mb-5 text-white">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default BannerShared;