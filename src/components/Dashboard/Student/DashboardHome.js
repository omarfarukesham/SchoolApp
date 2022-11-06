import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const DashboardHome = () => {
  const demoData = [
    {
      number: 4.25,
      name: "Current GPA",
      referText: "See Full MarkSheet",
      referPath: "/dashboard/grades",
    },
    {
      number: "15/11/2022",
      name: "Exam Will Start ",
      referText: "See Full MarkSheet",
      referPath: "/dashboard/grades",
    },
    {
      number: "90%",
      name: "Attendance Parentage",
      referText: "See Class Routine",
      referPath: "/dashboard/grades",
    },
    {
      number: "00.0",
      name: "Due Amount",
      referText: "See Student Ledger",
      referPath: "/dashboard/student-ledger",
    },
  ];
  return (
    <>
      <section className="flex ">
        {demoData.map(({ number, name, referText, referPath }, index) => (
          <Card
            key={index}
            name={name}
            number={number}
            referText={referText}
            referPath={referPath}
          />
        ))}
        {/* <div className="border shadow-md px-20 py-12 flex flex-col justify-center items-center">
          <p className="text-4xl text-cyan-600 font-medium">4.25</p>
          <p className="text-base text-gray-500 mt-3">Current GPA</p>
          <div className="divider"></div>
          <Link to="/dashboard/grades" className="text-cyan-500">
            See Full MarkSheet
          </Link>
        </div> */}
      </section>
    </>
  );
};

export default DashboardHome;
