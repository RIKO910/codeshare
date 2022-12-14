import React from 'react';
import './Company.css'
import adobe from '../../../Image/adobe.png';
const Company = () => {
    return (
        <div>
            <p>Used by software engineers at companies and universities we respect and admire.</p>
            <div className='grid grid-cols-6 image place-content-center'>
                <img src={adobe} alt="" />
                <img src={adobe} alt="" />
                <img src={adobe} alt="" />
                <img src={adobe} alt="" />
                <img src={adobe} alt="" />
                <img src={adobe} alt="" />

            </div>
        </div>
    );
};

export default Company;