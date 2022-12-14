import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero  min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">


                        <div className="card-body">
                            <p className=' text-3xl font-thin mb-11'>Log in to access your saved code</p>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email address</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Log In</button>
                            </div>
                            <div className="form-control mt-6 App">
                                <p>New to Codeshare? <a href="/signup" className='link'>Sign up here</a></p>
                                <a href=""className='link'>Forgot your password?</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;