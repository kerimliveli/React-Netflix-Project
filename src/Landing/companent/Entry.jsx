import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';


const Entry = () => {
    const navigate = useNavigate()

    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const handleChange = (event) => {
    setSelectedLanguage(event.target.value);}



  return (
        <div className="w-full h-screen px-4 sm:px-8 lg:px-[8rem]  bg-black bg-opacity-70 bg-blend-overlay   bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg')]" >
            <div className="flex justify-between pt-5">
                <div className="w-[120px] sm:w-[150px] ml-4 sm:ml-[36px] ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                </div>

                <div className=" flex gap-2 ">
                    
                    <select className="w-[100px] sm:w-[128px] h-[32px]  pl-2 rounded bg-black bg-opacity-40 border border-gray-700 text-white text-sm sm:text-lg appearance-none " value={selectedLanguage} onChange={handleChange}>
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                    </select>
                    <button onClick={() =>{navigate('/login')}}  className="w-[70px] sm:w-[75px] h-[32px] bg-red-600 text-sm sm:text-base text-white rounded hover:bg-red-700 active:bg-red-800 focus:outline-none "> Sign In</button>
                </div>

                
            </div>


            <div className="grid place-items-center h-[calc(100vh-80px)] ">
                <div>
                    <div className=" pb-4 text-2xl sm:text-4xl lg:text-6xl font-bold text-center text-white">
                        <h1>Unlimited movies, <br /> TV shows, and <br /> more</h1>
                    </div>
                    <div className="pb-8 text-sm sm:text-lg lg:text-xl  text-center text-white">
                        <h1>Starts at EUR 7.99. Cancel anytime.</h1>
                    </div>
                    <div>
                         <h1 className="text-xs sm:text-lg  text-center text-white">Ready to watch? Enter your email to create or restart your membership.</h1>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 pt-3">
                        <input  placeholder="Email address" className="w-full sm:w-[373px] h-[40px] sm:h-[56px] border text-white pl-3   bg-black bg-opacity-40  border-gray-700 rounded " type="text" />
                        <button onClick={() =>{navigate('/SignUp')}} className="w-full sm:w-[206px] h-[40px] sm:h-[56px]  bg-red-600 text-white rounded text-lg sm:text-2xl flex items-center justify-center hover:bg-red-700 active:bg-red-800 focus:outline-none ">Get Started
                        <svg className="w-[12px] ml-[17px] pt-[4px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                        </button>
                    </div>



                </div> 

                
            </div>



        </div>

  )
}

export default Entry