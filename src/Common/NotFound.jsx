import React from 'react'
import { useNavigate } from 'react-router';
 
const NotFound = () => {
 
  const navigate = useNavigate()
 
  return (
    <div className="flex flex-col  justify-center items-center h-screen gap-8 w-full  px-[8rem]  bg-black bg-opacity-80 bg-blend-overlay
    bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg')]" >
 
        <button onClick={() =>{
              navigate('/')
             }} >
              <img className="w-[150px] absolute top-[24px] left-[168px] " src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
         </button>
 
       
        <div className=" flex flex-col justify-center items-center gap-8 " >
          <p className="text-white text-8xl " > 401</p>
          <p className="text-white text-xl" >Authentication failed. Please check your login credentials</p>
        </div>
 
        <div >
            <button onClick={() =>{ navigate('/') }}
               className="w-[150px] h-[50px]  bg-red-700 text-white text-xl flex items-center justify-center rounded transform transition duration-150 ease-in-out
                       hover:scale-105 active:bg-red-700 active:scale-95  " > Go Back </button>
        </div>
 
    </div>
  )
}
 
export default NotFound