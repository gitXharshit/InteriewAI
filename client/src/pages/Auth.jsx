import react from 'react';
import { BsRobot } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../utils/firebase';
import axios from 'axios';
import { ServerUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';

function Auth({isModel = false}) {
  
  const dispatch = useDispatch()
  const handleGoogleAuth = async () => {
    try {
       const response = await signInWithPopup(auth,provider);
       let User = response.user
       let name = User.displayName
       let email = User.email
       console.log(ServerUrl);
       const res = await axios.post(ServerUrl + "/api/auth/google",{name,email} , {withCredentials:true})
       dispatch(setUserData(res.data))
       

    } catch (error) {
      console.log(error);
       dispatch(setUserData(null))
    }
  };

  return (
    <div className={`w-full 
     ${isModel ? "py-4" : "min-h-screen bg-[#f3f3f3] dark:bg-slate-950 flex items-center justify-center px-6 py-20"}`}>
        <motion.div
         initial={{ opacity: 0, y: -40 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.05}}
         className={`w-full
          ${isModel ? "max-w-md p-8 rounded-3xl" : "max-w-lg p-12 rounded-[32px]"}  bg-white dark:bg-slate-900 rounded-3xl shadow-2xl borer border-gray-200 dark:border-slate-800`}>
           <div className='flex items-center justify-center gap-3 mb-6'>
             <div className='bg-black dark:bg-emerald-500 text-white p-2 rounded-lg'>
               <BsRobot size={18}/>
             </div>
             <h2 className='font-semibold text-lg dark:text-slate-100'>Interview.AI</h2>
           </div>
           <h1 className='text-2xl md:text-3xl font-semibold text-center leading-snug mb-4 dark:text-slate-100'>
                Continue with{" "}
                <span className='bg-green-100 dark:bg-emerald-950 text-green-600 dark:text-emerald-400 px-3 py-1 rounded-full inline-flex items-center gap-2'>
                  <IoSparkles size={16}/>
                  AISmart Interview</span>
            </h1>
            <p className = 'text-center text-gray-500 dark:text-slate-400 text-sm md-text-base loading-relaxed mb-8'>
                Sign in to start AI powered mock interviews,track your progress,and unlock detailed performance insights.
            </p>

            <motion.button
              onClick={handleGoogleAuth}
              whileHover={{ scale: 1.03 , opacity: 0.9 }}
              whileTap = {{opacity: 1 , scale: 0.98}}
             className='w-full flex items-center justify-center gap-3 py-3 bg-black dark:bg-emerald-600 text-white rounded-full shadow-md'>
              <FcGoogle size={20}/>
                Continue with Google
            </motion.button>
         </motion.div>

      </div>
  )
} 

export default Auth;
