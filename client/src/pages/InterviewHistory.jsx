import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';
import { ServerUrl } from '../App';
import { FaArrowLeft } from 'react-icons/fa';

function InterviewHistory() {
  const [interviews,setInterviews] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{

     const getMyInterviews = async (params) => {
          try {

            const result = await axios.get(ServerUrl+"/api/interview/get-interview",{withCredentials:true})
            
            console.log(result.data);

            setInterviews(result.data)
          } catch (error) {
              console.log(error)
          }
          
     };
     getMyInterviews();
  },[])
 
  return (
    <div className='min-h-screen bg-linear-to-br from-gray-50 to-emerald-50 dark:from-slate-950 dark:to-emerald-950 py-10 transition-colors'>
       <div className='w-[90vw] lg:w-[70vw] max-w-[90%] mx-auto'>
          <div className='mb-10 w-full flex items-start gap-4 flex-wrap'>
              <button 
              onClick={()=>navigate("/")}
              className='mt-1 p-3 rounded-full bg-white dark:bg-slate-900 shadow hover:shadow-md transition'>
                <FaArrowLeft className='text-gray-600 dark:text-slate-300'/>
              </button>

              <div>
                 <h1 className='text-3xl font-bold flex-nowrap text-gray-800 dark:text-slate-100'>
                    Interview History
                 </h1>
                 <p className='text-gray-500 dark:text-slate-400 mt-2'>
                    Track your past Interviews and performance.
                 </p>
                
              </div>

          </div>

        {interviews.length === 0 ?
        <div className='bg-white dark:bg-slate-900 p-10 rounded-2xl shadow text-center'>
           <p className='text-gray-500 dark:text-slate-400'>
              No interview found. Start your first interview.
           </p>

        </div> 
        :
        <div className='grid gap-6'>
          {interviews.map((item,index)=>(
            <div key={index}
              onClick={()=>navigate(`/report/${item._id}`)}
              className='bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 dark:border-slate-800'> 
               <div>
                   <h3 className='text-lg font-semibold text-gray-800 dark:text-slate-100'>
                       {item.role}
                   </h3>
                   <p className='text-gray-500 dark:text-slate-400 text-sm mt-1'>
                       {item.experience} • {item.mode}
                   </p>
                   <p className='text-xs text-gray-400 dark:text-slate-500 mt-2'>
                       {new Date(item.createdAt).toLocaleDateString()}
                   </p>
               </div>
               <div className='flex items-center gap-6'>
                 
                 {/* Score */}
                 <div className='text-right '>
                     <p className='text-xl font-bold text-emerald-600'>
                        {item.finalScore || 0}/10
                     </p>
                     <p className='text-xs text-gray-400 dark:text-slate-500'>
                         Overall Score
                     </p>
                     
                     {/* Status badge */}

                     <span className={`px-4 py-1 rounded-full text-xs font-medium 
                          ${item.status === "completed"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-yellow-100 text-yellow-700"
                          }`}
                          >
                        {item.status}
                      </span>
                 </div>

               </div>
            </div>
          ))}
        </div>}

       </div>

    </div>
  )
}

export default InterviewHistory
