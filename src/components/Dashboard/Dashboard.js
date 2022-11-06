import React from "react";
import { Outlet } from "react-router-dom";

import Student from "./Student/Student";
const Dashboard = () => {
  // console.log(children);
  return (
    <div>
      <Student>
        <Outlet />
      </Student>
    </div>
  );
};

export default Dashboard;
