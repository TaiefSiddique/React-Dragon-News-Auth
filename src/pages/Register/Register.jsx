import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar.jsx/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";



const Register = () => {

    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const profilePicture = form.get('profilePicture');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, profilePicture, email, password);


        createUser(name, profilePicture, email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content w-11/12">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile picture link</span>
                                </label>
                                <input type="link" name="profilePicture" placeholder="Profile Picture" className="input input-bordered" required />
                            </div>
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className=" flex justify-center gap-3 mb-7">
                            <h1>Already have an account</h1>
                            <Link to="/login" className=" text-blue-800 font-semibold">Login</Link>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Register;