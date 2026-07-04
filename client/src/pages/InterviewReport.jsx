import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { ServerUrl } from '../App';
import axios from 'axios';
import Step3Report from '../components/Step3Report';

function InterviewReport() {
  const {id} = useParams();
  const [report,setReport] = useState(null);

  useEffect(()=>{
    const fetchReport = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/interview/report/" + id, {withCredentials: true});
        
        setReport(result.data);
      } catch (error) {

        console.log(error);
      }   
    }
    fetchReport()

  },[])

  if(!report){
     return (
      <div className='min-h-screen flex items-center justify-center bg-white dark:bg-slate-950'>
          <p className='text-gray-500 dark:text-slate-400 text-lg'> Loading report...</p>
      </div>
     )
  }

  return <Step3Report report={report} />

}

export default InterviewReport
