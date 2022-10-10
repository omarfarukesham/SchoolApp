import React from "react";
import { HashLoader } from "react-spinners";

// You can customize this Loading component
// When you call this component, give your classes and size as you prefer.
// Example: <Loading className={flex justify-center items-center h-screen} size={80} />

const Loading = ({ className, size }) => {
  return (
    <div className={className}>
      <div className="sweet-loading">
        <HashLoader size={size} color="#36d7b7" />
      </div>
    </div>
  );
};

export default Loading;
