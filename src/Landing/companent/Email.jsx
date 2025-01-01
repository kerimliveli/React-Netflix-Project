import React from 'react'
import { useNavigate } from 'react-router';

const Email = () => {
  const navigate = useNavigate()
  return (
    <div className="">
        <h3 className=" text-lg  text-center text-white">Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="flex gap-2 pt-5 justify-center ">
            <input  placeholder="Email address" className="w-[607px] h-[56x] border text-white pl-3   bg-black bg-opacity-40  border-gray-700 rounded " type="text" />
            <button onClick={() =>{navigate('/SignUp')}} className="w-[206px] h-[56px] bg-red-700 text-white rounded text-2xl flex items-center justify-center ">Get Started 
            <svg className="w-[12px] ml-[17px] pt-[4px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
            </button>
        </div>


    </div>
  )
}

export default Email