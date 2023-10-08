import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar.jsx/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password);
    }
    return (

        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content w-1/2">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className=" flex justify-center gap-3 mb-7">
                            <h1>Don`t have an account</h1>
                            <Link to="/register" className=" text-blue-800 font-semibold">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;