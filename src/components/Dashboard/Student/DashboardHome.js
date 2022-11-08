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
    <section className="">
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

      <section className=" mt-9 grid grid-cols-3 gap-8 border shadow-md p-5 rounded">
        <section className=" col-span-1 border rounded">
          {/* Title */}
          <div className="p-5 text-center  bg-blue-400 text-white rounded-t-md">
            <p className="text-xl">Class Teacher </p>
          </div>
          <section className="p-4">
            <div className=" flex flex-col justify-between border rounded shadow-md px-16 pt-3 pb-28">
              <div className="flex flex-col justify-center items-center mt-4 ">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <p className="pt-4 font-bold">Soliman Sukhun</p>
                <p>Bangladesh National Create Player</p>
              </div>
              <div className="flex justify-center items-center gap-2 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <p className="text-blue-500 text-center">
                  <a
                    href="mailto:soliman@school.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    soliman@school.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className="col-span-2 border">
          <div className="bg-blue-400 text-center p-5 rounded-t-md">
            <p className="text-white text-xl">Exam Routine</p>
          </div>
          <div className="overflow-x-auto">
            {/* Demo Data */}
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                  <th>1</th>
                  <td>Physics</td>
                  <td>12 Nov 2022</td>
                  <td>10:00 AM</td>
                </tr>
                {/* <!-- row 2 --> */}
                <tr className="active">
                  <th>2</th>
                  <td>Math</td>
                  <td>14 Nov 2022</td>
                  <td>12:00 PM</td>
                </tr>
                {/* <!-- row 3 --> */}
                <tr>
                  <th>3</th>
                  <td>Bangla</td>
                  <td>15 Nov 2022</td>
                  <td>11:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </section>
  );
};

export default DashboardHome;
