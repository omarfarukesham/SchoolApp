import React, { useState } from "react";
import { useEffect } from "react";

const Grades = () => {
  const [grades,setGrades]=useState([])
      useEffect(()=>{
        fetch('Grades.json')
        .then(res=>res.json())
        .then(data=>setGrades(data))
      },[])
        return (
          <div>
            <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Subject</th>
                  <th>Theory</th>
                  <th>Practical</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
              {
                grades.map((grade,index)=> 
                            <tr key={grade.id}>
                            <th className="bg-slate-100">{index+1}</th>
                            <td className="bg-slate-100">{grade.subject}</td>
                            <td className="bg-slate-100">{grade.theory}</td>
                            <td className="bg-slate-100">{grade.practical}</td>
                            <td className="bg-slate-100">{grade.grade}</td>
                            </tr>)
              }

              </tbody>
            </table>
          </div>
          </div>
  );
};

export default Grades;
