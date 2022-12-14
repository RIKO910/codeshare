import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const SignUp = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero  min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        
                       
                            <div className="card-body">
                            <p className=' text-5xl font-thin mb-11'>Sign up to save code</p>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your full name</span>
                                    </label>
                                    <input type="text" placeholder="" className="input input-bordered" />
                                </div>
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
                                    <button className="btn btn-primary">Sign up</button>
                                </div>
                                <div className="form-control mt-6 App">
                                   <p>Already signed up? <a href="/login" className='link'>Log in here</a></p>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;