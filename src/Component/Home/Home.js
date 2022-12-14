import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Card from './Card/Card';
import Company from './Company/Company';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-thin ">Share Code in Real-time with Developers</h1>
                        <p className="py-6">An online code editor for interviews, troubleshooting, teaching & more…</p>
                        <button className="btn btn-error  ">Share Code Now</button>
                        <br />
                        <br />
                        <p className='pb-36'>Share code for free.</p>
                    </div>
                </div>
            </div>
            <Company></Company>
            <Card></Card>
            <Footer></Footer>
        </div>
    );
};

export default Home;