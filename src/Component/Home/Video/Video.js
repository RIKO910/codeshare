import React from 'react';
import video from '../../../Image/video.mp4'
import './Video.css'

const Video = () => {
    return (
        <div className='mx-28 mb-20'>
            <div className='grid grid-cols-2'>
                <div>
                <video className='h-96 ok' src={video}>
                </video>
                </div>
                <div className='grid grid-rows-2 ml-20 my-11'>
                <video className='h-36 w-96' src={video}></video>
                <video className='h-36 w-96' src={video}></video>
                </div>
            </div>
        </div>
    );
};

export default Video;