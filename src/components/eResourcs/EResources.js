import React, { useEffect, useState } from 'react';
import { BsBook } from 'react-icons/bs';
import { SiGoogleclassroom } from 'react-icons/si';
import EResource from './EResource';
const EResources = () => {
    const [resources,setResources]=useState([])
    const [size,setSize]=useState("")
    const [filter,setFilter]=useState(resources)
    useEffect(()=>{
        fetch('EResources.json')
        .then(res=>res.json())
        .then(data=>setResources(data))
    })
    const filterName =(name)=>{
        const updateList=resources.filter((x)=>x.name===name)
        setFilter(updateList)
     }
    return (
        <div className="bg-slate-900 bg-cover bg-no-repeat text-center font-poppins">
        <div class=" -translate-y-2/4  rounded-lg mx-auto w-1/2 py-6 bg-[#43d485] ">
     
        <div className="block md:flex items-center justify-center">
       
        <div className="flex items-center mb-4 md:mb-0">
        <BsBook className="text-3xl mx-6 text-[#FCF6F5FF]"/>
        <select className="select w-36 mr-4 bg-slate-900 text-white" name="" id=""  onChange={(e)=>{
             const selectSetSize=e.target.value;
             if(selectSetSize!=="All")
             {
                setSize(()=>filterName(selectSetSize))
             }
             else
             {
                setFilter(resources)
             }
           
         }}>
             <option value="All">All</option>
             <option value="Bangla">Bangla</option>
             <option value="English">English</option>
             <option value="ICT">ICT</option>
        </select> 
        </div>
         <div className="flex items-center">
         <SiGoogleclassroom className="text-3xl mx-6 text-[#FCF6F5FF]"/>
        <select name="" id="" className="select w-36 mr-4 bg-slate-900 text-white">
            <option value="Class" select>Class</option>
            <option value="Class" select>V</option>
            <option value="Class" select>VI</option>
            <option value="Class" select>VII</option>
            <option value="Class" select>VIII</option>
            <option value="Class" select>IX</option>
            <option value="Class" select>XI</option>
        </select>
         </div>
        </div>
       
      
         </div> 
         <h1 className="text-white text-5xl my-5 text-left ml-8">Book List</h1>
         <div className="grid grid-cols-1 md:grid-cols-3 g-4">
            {
              filter.map((resource)=><EResource resource={resource} key={resource._id}></EResource>)
            }
         </div>
        </div>
    );
};

export default EResources;