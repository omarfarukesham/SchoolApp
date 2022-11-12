import React, { useState } from "react";
import { useEffect } from "react";
const GradesData=[
  {
      "id":1,
      "subject":"Bangla",
      "theory":54,
      "practical":"NA",
      "grade":"B",
      "category":"1st Term"
  },

  {
      "id":2,
      "subject":"English",
      "theory":66,
      "practical":"NA",
      "grade":"A-",
      "category":"1st Term"
  },

  {
      "id":3,
      "subject":"Math",
      "theory":83,
      "practical":"NA",
      "grade":"A+",
      "category":"1st Term"
  },
  {
    "id":4,
    "subject":"Bangla",
    "theory":58,
    "practical":"NA",
    "grade":"B",
    "category":"2nd Term"
},

{
    "id":5,
    "subject":"English",
    "theory":78,
    "practical":"NA",
    "grade":"A",
    "category":"2nd Term"
},

{
    "id":6,
    "subject":"Math",
    "theory":65,
    "practical":"NA",
    "grade":"A-",
    "category":"2nd Term"
}
]


const Grades = () => {
      const [grades,setGrades]=useState([])
      const [filter,setFilter]=useState(GradesData)
      const filterName =(category)=>{
        const updateList=GradesData.filter((x)=>x.category===category)
        setFilter(updateList)
     }
      // useEffect(()=>{
      //   fetch('Grades.json')
      //    .then(res=>res.json())
      //    .then(data=>setGrades(data))
      // })
      //  console.log(grades)
        return (
          <div>
            <select name="" id="" className="border p-4 bg-slate-900 text-white w-full focus:outline-green-500 mb-4" onChange={(e)=>{
             const selectSetSize=e.target.value;
             setFilter(()=>filterName(selectSetSize))
           
         }}>
               <option value="1st Term">1st Term</option>
               <option value="2nd Term">2nd Term</option>
            </select>
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
                filter?.map((grade,index)=><tr key={grade.id}>
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
