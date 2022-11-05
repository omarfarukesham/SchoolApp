import React from 'react';
import image from '../../asset/EResources/2458571-removebg-preview.png'
const EResourcesHeader = () => {
    return (
        <div class=" bg-emerald-100 ">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
            <img src={image} alt="" />
            <h1 class="text-3xl md:text-5xl font-bold text-fuchsia-700 flex items-center justify-center">Download Book Now</h1>
          </div>
        </div>
      </div>
    );
};

export default EResourcesHeader;