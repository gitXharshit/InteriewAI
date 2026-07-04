import react from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import InterviewPage from './pages/InterviewPage';
import InterviewHistory from './pages/InterviewHistory';
import Pricing from './pages/Pricing';
import InterviewReport from './pages/InterviewReport';
import {useEffect} from 'react'
import axios from 'axios';
import { setUserData } from './redux/userSlice';
import { useDispatch } from 'react-redux';
import ThemeToggle from './components/ThemeToggle';

export const ServerUrl = import.meta.env.VITE_SERVER_URL || (
  import.meta.env.DEV ? "" : "https://interiewai.onrender.com"
);

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark

    document.documentElement.classList.toggle("dark", shouldUseDark)
  },[])

  useEffect(()=>{
     const getUser = async() => {
        try{
            const result = await axios.get(ServerUrl + "/api/user/current-user",
            {withCredentials:true})
            dispatch(setUserData(result.data))
        }
        catch(error){
            if(error.response?.status !== 401){
              console.log(error)
            }
            dispatch(setUserData(null))
        }
     }
     getUser()
  },[dispatch])
  return (
    <>
     <ThemeToggle/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/auth' element={<Auth/>}/>
       <Route path='/interview' element={<InterviewPage/>}/>
       <Route path='/history' element={<InterviewHistory/>}/>
       <Route path='/pricing' element={<Pricing/>}/>
       <Route path='/report/:id' element={<InterviewReport/>}/>

     </Routes>
    </>

  );
}

export default App;
