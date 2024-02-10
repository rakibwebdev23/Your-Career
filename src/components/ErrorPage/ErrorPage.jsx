import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-60">
            <p className="text-2xl font-bold">Oops!!</p>
            <p className="mt-2 text-xl text-gray-600">404</p>
            <p className="text-xl p-2">Not Found</p>
            <Link to='/'><button className="btn btn-outline btn-neutral font-bold mt-2">Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;