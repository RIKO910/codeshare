import React from 'react';

const Card = () => {
    return (
        <div className='grid grid-cols-3 px-16 py-20'>
            <div className="card w-96 ">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-thin">Code with your team</h2>
                    <p className='font-thin justify-start '>Open a Codeshare editor, write or copy code, then share it with friends and colleagues. Pair program and troubleshoot together</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline btn-accent">Hack Together</button>
                    </div>
                </div>
            </div>
            <div className="card w-96  ">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-thin">Code with your team</h2>
                    <p className='font-thin justify-start '>Open a Codeshare editor, write or copy code, then share it with friends and colleagues. Pair program and troubleshoot together</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline btn-accent">Hack Together</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 ">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-thin">Code with your team</h2>
                    <p className='font-thin justify-start '>Open a Codeshare editor, write or copy code, then share it with friends and colleagues. Pair program and troubleshoot together</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline btn-accent">Hack Together</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Card;