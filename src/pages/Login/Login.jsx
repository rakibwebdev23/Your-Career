import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider/UserProvider";
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {

    const { userLogin, googleLogin, githubLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        // const form = new FormData(e.currentTarget);
        // const email = form.get("email");
        // const password = form.get("password");
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        userLogin(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    }

    // google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubLogin = () =>{
        githubLogin()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="items-center mt-10">
            <h3 className="text-4xl font-bold text-center">Please Login</h3>
            <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">

                    <button className="btn btn-primary">Login</button>

                </div>
            </form>
            <div className="text-center">
                <p>Do not have an account ? Please <Link to="/register" className="text-red-600 font-bold ">Register</Link></p>
            </div>

            <div className="text-center mt-2">
                <Link to="/"> <button onClick={handleGoogleLogin} className="btn border border-gray-400 lg:w-1/2 md:w-3/4">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button></Link>
            </div>
            <div className="text-center mt-2">
                <Link to="/"><button onClick={handleGithubLogin} className="btn border border-gray-400 lg:w-1/2 md:w-3/4">
                    <FaGithub></FaGithub>
                    Login With GitHub
                </button></Link>
            </div>
        </div>
    );
};

export default Login;