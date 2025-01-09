import React from 'react'
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import Landing from './Landing/Landing';
import Homepage from './HomePages/Homepage';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Details from './Deteails/Details';
import NotFound from './Common/NotFound';
import { useStore } from 'zustand'
import { themeStore} from "Common/Store.js"




const App = () => {

  const { token } = useStore(themeStore);

  return (
    <div>
       <BrowserRouter>
        <Routes>
             <Route path="/" element={<Landing />} />
           
             {token ? (
              <>
               <Route path="/home" element={<Homepage/>}/>
               <Route path="/details" element={<Details/>}/>
              </>
                ) : (<Route path="*" element={<Navigate to="/notfound" />}/> )}




             
             <Route path="/login" element={<Login/>} />
             <Route path="/signup" element={<SignUp/>} />
             <Route path="/notfound" element={<NotFound/>} />

        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App