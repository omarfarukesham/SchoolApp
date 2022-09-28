import React from 'react';
import noticeImg from '../../asset/noticeBoard.png'
import Sliders from '../Slider/Sliders';
const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1'>
            <div className='m-2 h-full'>
                <img className='rounded-xl' src={noticeImg} alt='noticeBoard' />
            </div>
            <div className='m-2'>
                <Sliders></Sliders>
            </div>
        </div>
    );
};

export default Banner;