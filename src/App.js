import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavB from './components/NavB';
import ListCellphone from './components/listCellphone';
import AddCellphone from './components/addCellphone';
import Home from './components/home';
import './css/navB.css'
import UpdateCellphones from './components/UpdateCellphones';
function App() {
  return (
    <div className="App">
     
      <Router>
        <NavB/>
        <Routes>
            <Route path='/Update' element={<UpdateCellphones/>} />
            <Route path='/' element={<Home/>}/>
            <Route path='/Listcellp' element={<ListCellphone/>} />
            <Route path='/AddPhone' element={<AddCellphone/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
