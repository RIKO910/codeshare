import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Card from './Card/Card';
import Company from './Company/Company';
import Video from './Video/Video';
const Home = () => {
    return (
        <div>
           <div className='bg-gradient-to-r from-secondary to-primary ... '>
           <Navbar></Navbar>
           <div className="hero min-h-screen  ">
                <div className="hero-content text-center">
                    <div className="pt-24">
                        <h1 className="text-5xl font-thin ">Share Code in Real-time with Developers</h1>
                        <p className="py-6">An online code editor for interviews, troubleshooting, teaching & more…</p>
                        <button className="btn btn-error  ">Share Code Now</button>
                        <br />
                        <br />
                        <p className='pb-'>Share code for free.</p>
                        <Video></Video>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

            <Company></Company>
            <Card></Card>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;