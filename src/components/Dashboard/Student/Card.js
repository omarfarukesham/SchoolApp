import React from "react";
import { Link } from "react-router-dom";

const Card = ({ number, name, referText, referPath }, data) => {
  console.log(data);
  return (
    // <div className="flex flex-col w-full border rounded-md shadow justify-center items-center">
    //   <div className="grid h-20  rounded-box place-items-center">
    //     {/* content */}
    //     <p className="text-4xl text-cyan-600 font-medium">4.25</p>
    //     <p className="text-base text-gray-500 mt-3">Current GPA</p>
    //   </div>
    //   <div className="divider"></div>
    //   <div className="grid h-20 rounded-box place-items-center">
    //     {/* content */}
    //     <Link to="/dashboard/grades" className="text-cyan-500 -mt-2">
    //       See Full MarkSheet
    //     </Link>
    //   </div>
    // </div>

    <div className="border rounded-md w-full shadow px-24 mx-2 pt-10 pb-5 flex flex-col justify-center items-center">
      <p className="text-4xl text-cyan-600 font-medium">{number}</p>
      <p className="text-base text-gray-500 mt-3">{name}</p>

      <div className="divider"></div>
      <Link to={referPath} className="text-cyan-500 -mt-2">
        {referText}
      </Link>
    </div>
  );
};

export default Card;
