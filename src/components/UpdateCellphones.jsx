import React,{useState, useEffect} from 'react'
import'../css/addChellp.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function UpdateCellphones() {
    let nav = useNavigate();
    const [brandNam, setBrandNam] = useState('');
    const [model, setModel] = useState('');
    const [storage, setStorage] = useState('');
    const[price, setPrice] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [ID,setID] = useState('null');
  
    const handlesumit = async (e) => {
    e.preventDefault();
   
    try{
      const response = await axios.put(`https://localhost:44338/api/cellphones/${ID}`,
        {  brandNam: brandNam,
          model: model,
          storage: storage,
          price: price,
          imgUrl: imgUrl,
        });
        nav('/Listcellp');
        console.log(response.data);
    }catch(err){
      console.log(err.response);
    }
  };

  
 useEffect (() => {
  setBrandNam(localStorage.getItem('BrandNam'));
  setModel(localStorage.getItem('Model'));
  setStorage(localStorage.getItem('Storage'));
  setPrice(localStorage.getItem('Price'));
  setImgUrl(localStorage.getItem('imgUrl'));
  setID(localStorage.getItem('ID'));
},[])

  return (
    <div className='container-form'>
    <h1>update Cell Phones</h1>
      <form >
        <input onChange={(e)=>setBrandNam(e.target.value)} id='brandNam' value={brandNam} placeholder='Write the Brand here' type="text" required />
          <br/>
        <input onChange={(e)=>setModel(e.target.value)} id='model'value={model} placeholder='Write the Model here'type="text" required />
          <br/>
        <input onChange={(e)=>setStorage(e.target.value)}  id='storage' value={storage} placeholder='Whrite the Storage here' type="text" required />
          <br/>
          <input onChange={(e)=>setPrice(e.target.value)}  id='price' value={price} placeholder='Write the Price here without symbols' type="text" required />
          <br/>
          <input onChange={(e)=>setImgUrl(e.target.value)}  id='imgUrl' value={imgUrl} placeholder='Put the Url image here' type="text" required />
          <br/>
        <button type="submit" onClick={handlesumit}  class="btn btn-outline-secondary">Save</button>
      </form>
  </div>
  )
}