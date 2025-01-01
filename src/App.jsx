import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import Homepage from './HomePages/Homepage';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Details from './Deteails/Details';





const App = () => {



  return (
    <div>
       <BrowserRouter>
        <Routes>
             <Route path="/" element={<Landing />} />
             { 
             <>
              <Route path="/home" element={<Homepage/>}/>
              <Route path="/details" element={<Details/>}/>
             </>
             }
             
             <Route path="/login" element={<Login/>} />
             <Route path="/signup" element={<SignUp/>} />

        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App