import Home from "./Home.js"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import React, { useState } from "react";
import Axios from 'axios';
import Example from "./componenets/dashboard/Example.jsx"
import Parametreglobal from "./componenets/dashboard/Parametreglobal.jsx"
function App() {


  



  return (
   
        <BrowserRouter>
          <Routes>
          < Route path='/' element={<Home/>}/>

            <Route path='example' element={<Example />}/>
            <Route path='Parametreglobal' element={<Parametreglobal />}/>
          </Routes>
        </BrowserRouter >
   
  );
                  }

export default App;
