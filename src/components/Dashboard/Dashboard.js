import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GradesIcon } from "../../asset/icons/GradesIcon";
import { HomeIcon } from "../../asset/icons/HomeIcon";
import { PageIcon } from "../../asset/icons/PageIcon";
import { RssIcon } from "../../asset/icons/RssIcon";
import { TakaIcon } from "../../asset/icons/TakaIcon";
const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content m-10">
          {/* <!-- Page content here --> */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-black bg-opacity-90 text-white">
            {/*  Sidebar content here  */}
            {/* Student Profile */}
            <section className="flex flex-col items-center">
              <p className="text-lg text-white text-center">Ananta Jalil</p>
              <p className="text-sm text-gray-400 mt-1">2022091701022</p>
              <div className="avatar mt-3 mb-8">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/04/720/405/thumbnail_elon-musk-twitter-.jpg?ve=1&tl=1"
                    alt=""
                  />
                </div>
              </div>
            </section>
            <p className="text-sm text-gray-400 mb-3">Student Dashboard</p>
            {/* <Student /> */}
            <li>
              <NavLink to="dashboard-home">
                <HomeIcon />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="grades" className="my-2">
                <GradesIcon />
                Grades
              </NavLink>
            </li>
            <li>
              <NavLink to="student-ledger">
                <PageIcon /> Student Ledger
              </NavLink>
            </li>
            <li>
              <NavLink to="online-payment" className="my-2">
                <TakaIcon />
                Online Payment
              </NavLink>
            </li>
            <li>
              <NavLink to="notice" className="">
                <RssIcon />
                Notice
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
