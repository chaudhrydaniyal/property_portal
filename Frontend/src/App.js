import Header from './Components/Header/Header'
import Home from './Pages/Home/Home';
import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import AddProperty from './Components/AddProperty/AddProperty';
import Register from './Pages/Register/Register';
function App() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  return (
   <>
    <BrowserRouter>
       <Header show={show} handleShow={handleShow} handleClose={handleClose}/>
        <Routes>      
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/addproperty' element={<AddProperty/>}></Route>
        <Route path='/register' element={<Register handleShow={handleShow}/>}></Route>

       </Routes>
       <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
