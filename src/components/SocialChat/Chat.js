import React from 'react';
import Avatar from '../../asset/ChatPageIcon/Avatar.jpg'
const chat = () => {
    return (
        <div>
            
         <div className="flex font-poppins">
        
        <div className="w-64 h-screen bg-gray-100">
          <div className="text-xl p-3"> 
              Chats
          </div>
          <div className="p-3 flex">
           <input type="text" className="p-2 flex-grow w-14 bg-gray-200 focus:outline-none rounded" placeholder="Search for users" />
           <div className="flex justify-center items-center bg-slate-200 pr-2 \">
             <h1 className="">S</h1>
           </div>
          </div>
          <div className="flex">
            <div className="p-2 flex justify-center items-center flex-col">
              <img src={Avatar} className="w-8  h-8 rounded-full" alt="" />
         
              <div className="w-3 h-3 relative left-3 bottom-3 bg-white rounded-full">
          
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <div className="text-gray-500 text-xs text-center ">
               Omar Faruk
              </div>
            </div>
            <div className="p-2 flex justify-center items-center flex-col">
              <img src={Avatar} className="w-8  h-8 rounded-full" alt="" />
              <div className="text-gray-500 text-xs text-center pt-3">
               Omar Faruk
              </div>
            </div>
            <div className="p-2 flex justify-center items-center flex-col">
              <img src={Avatar} className="w-8  h-8 rounded-full" alt="" />
              <div className="text-gray-500 text-xs text-center pt-3">
               Omar Faruk
              </div>
            </div>
         
          </div>
          <div className="flex m-3 bg-white  rounded-lg p-2">
           <div>
             <img src={Avatar} className="w-14 h-14 rounded-full" alt="" />
           </div>
          <div className="flex-grow p-3">
          <div className="flex text-xm text-gray-400 justify-between">
              <div>
                   Faruk
              </div>
              <div className="text-gray-400">
                 11.30PM
              </div>
             
           </div>
           <div className="text-xs text-gray-400">
               This is very good
           </div>
          </div>

          </div>
          <div className="flex m-3 bg-white  rounded-lg p-2">
           <div>
             <img src={Avatar} className="w-14 h-14 rounded-full" alt="" />
           </div>
          <div className="flex-grow p-3">
          <div className="flex text-xm text-gray-400 justify-between">
              <div>
                   Faruk
              </div>
              <div className="text-gray-400">
                 11.30PM
              </div>
             
           </div>
           <div className="text-xs text-gray-400">
               This is very good
           </div>
          </div>

          </div>
          <div className="flex m-3 bg-white  rounded-lg p-2">
           <div>
             <img src={Avatar} className="w-14 h-14 rounded-full" alt="" />
           </div>
          <div className="flex-grow p-3">
          <div className="flex text-xm text-gray-400 justify-between">
              <div>
                   Faruk
              </div>
              <div className="text-gray-400">
                 11.30PM
              </div>
             
           </div>
           <div className="text-xs text-gray-400">
               This is very good
           </div>
          </div>

          </div>
          <div className="flex m-3 bg-white  rounded-lg p-2">
           <div>
             <img src={Avatar} className="w-14 h-14 rounded-full" alt="" />
           </div>
          <div className="flex-grow p-3">
          <div className="flex text-xm text-gray-400 justify-between">
              <div>
                   Faruk
              </div>
              <div className="text-gray-400">
                 11.30PM
              </div>
             
           </div>
           <div className="text-xs text-gray-400">
               This is very good
           </div>
          </div>

          </div>
        </div>
        <div className="flex-grow h-screen flex flex-col">
         <div className="w-full h-14 flex items-center ">
           <div className="flex">
                   <div className="p-2">
              <img src={Avatar} className="w-8 mt-3 h-8 rounded-full" alt="" />
         
              <div className="w-3 flex justify-center items-center h-3 relative left-6 bottom-3 bg-white rounded-full">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
            </div>
           </div>
             <div>
               <div>
                 Asif
               </div>
               <div className="text-xs">
                 online
               </div>
             </div>
              </div>
              <div className="w-full flex-grow bg-gradient-to-r from-green-500 to-blue-400">
                 <div className="flex items-end w-1/2  m-8">
                    <img src={Avatar} className="w-8 h-8 rounded-full m-3" alt="" />
                  <div className="p-3 bg-gray-100">
                  <div className="text-sm">
                        Asif
                    </div>
                    <div className="text-xs">
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, fuga?
                    </div>
                    <div className="text-xs">
                     8 minutes ago
                    </div>
                  </div>
                 </div>
                <div className="flex justify-end">
                <div className="flex items-end w-1/2  m-8">
                  
                  <div className="p-3 bg-purple-700 text-white">
                  <div className="text-sm">
                        Asif
                    </div>
                    <div className="text-xs">
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus tenetur exercitationem temporibus sint eveniet?
                    </div>
                    <div className="text-xs">
                     8 minutes ago
                    </div>
                  </div>
                  <img src={Avatar} className="w-8 h-8 rounded-full m-3" alt="" />
                 </div>
                </div>
              </div>
              <div className="w-full h-14 flex ">
                 <input type="text" placeholder="Type your messege" className="w-full flex-grow focus:outline-none bg-gray-300 px-3" />
              </div>
        </div>
      </div>
        </div>
    );
};

export default chat;