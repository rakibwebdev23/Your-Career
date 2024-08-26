import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider/UserProvider";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";


const Register = () => {

    const { createUser, googleLogin, githubLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        // const form = new FormData(e.currenTarget);
        // const name = form.get("name");
        // const photo = form.get("photo");
        // const email = form.get("email");
        // const password = form.get("password");
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate("/login");
            })
            .catch(error => {
                console.log(error);
            })
    }

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
        <div>
            <Helmet><title>Register</title></Helmet>
            <h2 className="text-4xl font-bold text-center mt-10">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo url" name="photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
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
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <div className="text-center">
                <p>Do you have an account ? Please <Link className="text-red-600 font-semibold" to="/login">Login</Link></p>
            </div>
            <div className="text-center mt-2">
                <Link to="/login"><button onClick={handleGoogleLogin} className="btn border border-gray-400 lg:w-1/2 md:w-3/4">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button></Link>
            </div>
            <div className="text-center mt-2">
                <Link to="/login"><button onClick={handleGithubLogin} className="btn border border-gray-400 lg:w-1/2 md:w-3/4">
                    <FaGoogle></FaGoogle>
                    Login With GitHub
                </button></Link>
            </div>
        </div>
    );
};

export default Register;