/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../css/listcellp.css';
import CellphoneGapi from '../hooks/CellphoneGapi';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function ListCellphone() {
  
    const [cellphones] = CellphoneGapi();
   
    
    console.log(cellphones);

    
   function DeleteC(id) {
     axios.delete(`https://localhost:44338/api/cellphones/${id}`)
     window.location.reload()
   }


     const setID = (id) => {
        console.log(id);
        localStorage.setItem('ID', id);
     };

  return (
    <div className="contanerC">
    {
        cellphones.map(({
          id,
          brandNam,
          model,
          storage,
          price,
          imgUrl
            }) => {
                return (
                    <div className="card"key={id} >
                        <img className="card-img-top" src={imgUrl} alt="Card image cap" /> 
                        
                          <div className="card-body"  >
                            <h6 className="card-title"> <b>Brand:</b> {brandNam} </h6>
                              <h6 className="card-text"><b>Model:</b> {model}</h6>
                            <h6 className="card-text"><b>Storage:</b> {storage}</h6>
                          <h6 className="card-text"><b>Price:</b> {price}</h6>
                          <Link  to={'/Update'} type="button" class=" btn btn-info me-2 " onClick={()=> setID(id)}>Edit</Link>
                          <Link type="button" className="btn btn-danger mr-2" onClick={() =>DeleteC(id)}>Delete</Link>
                    </div>
                  </div>
                )  
            })
        }  
    
 
</div>
 
  )
}
