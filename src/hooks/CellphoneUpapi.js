import axios from 'axios';


const CellphoneUpapi =(brandNam,model,storage,price,imgUrl,id) => {
    var FormData = require('form-data');
    var data = new FormData();
    console.log('dam'+id);
    data.append('BrandNam', brandNam);
    data.append('Model', model);
    data.append('Storage', storage);
    data.append('Price', price);
    data.append('ImgUrl', imgUrl);
    data.append('Id', id);
  
    const updateCellphones = async() =>{
        await axios.put('https://localhost:44338/api/cellphones/'+id, data)
        .then(function (response) {
            console.log(response);
            window.location.href = "/"
           
        })
        .catch(function (error) {
            console.log(error);
          
        });
    }
    updateCellphones()
}

export default CellphoneUpapi