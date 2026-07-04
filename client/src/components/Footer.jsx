import React from 'react'
import { BsRobot } from 'react-icons/bs'

function Footer() {
  return (
    <div className='bg-[#f3f3f3] dark:bg-slate-950 flex justify-center px-4 pb-10 py-4 pt-10 transition-colors'>
      <div className='w-full max-w-6xl bg-white dark:bg-slate-900 rounded-[24px] shadow-sm border border-gray-200 dark:border-slate-800 py-8 px-3 text-center transition-colors'>
        <div className='flex justify-center items-center gap-3 mb-3'>
           <div className='bg-black dark:bg-emerald-500 text-white p-2 rounded-lg'>
             <BsRobot size={16}/>
           </div>
           <h2 className='font-semibold dark:text-slate-100'>Interview.AI</h2>
        </div>
         <p className='text-gray-500 dark:text-slate-400 text-sm max-w-xl mx-auto'>
            AI powered interview preparation platform designed to improve communication skills,technical depth and professional confidence.
         </p>
      </div>
    </div>
  )
}

export default Footer
