import React from "react";
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
    <section>
      <section className=" pt-7 pb-6 px-3 border shadow-md">
        {/* Alert Section */}
        <div className="flex justify-center mb-5">
          <p className="bg-sky-100 text-blue-900 text-xl px-8 py-6 w-2/3 rounded border border-l-8 border-l-blue-400">
            <span className="font-bold">Info:</span> Please, Collect your Admit
            card from account office.
          </p>
        </div>
        <div className="flex ">
          {demoData.map(({ number, name, referText, referPath }, index) => (
            <Card
              key={index}
              name={name}
              number={number}
              referText={referText}
              referPath={referPath}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default DashboardHome;
