import React from 'react';

const EResource = ({resource}) => {
      const {name,image,Class}=resource
    return (
        <div class="card card-compact w-96 bg-white text-black shadow-xl container mx-auto mb-3">
            <div class="card-body">
                <img src={image} className="w-1/2 mx-auto rounded-xl" alt="" />
                <h2 class="text-3xl font-bold text-center border-b-2 border-indigo-500 py-2 ">{name}</h2>
                <h1 className="flex justify-between text-lg">Class : <span>{Class}</span></h1>
                <div class="card-actions justify-center">
                <button class=" bg-pink-600 rounded-lg text-white px-4 py-2">Download Now</button>
                </div>
            </div>
            </div>
    );
};

export default EResource;