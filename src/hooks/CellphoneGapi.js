import {useState, useEffect} from 'react';
import axios from 'axios';

const  CellphoneGapi = () =>   {
  
  const [cellphones, setCellphones] = useState([]);
  const [err, setErr] = useState([]);

  
  useEffect(() => {
    // get request using axios inside useEffect React hook
    const getCellPhones = () =>{
        axios.get('https://localhost:44338/api/cellphones/')
        .then((response)=> setCellphones(response.data))
        .catch((error )=> setErr(error))
      
    }
    getCellPhones()
  }, []);
  return[cellphones, err]
  
};

export default  CellphoneGapi;

