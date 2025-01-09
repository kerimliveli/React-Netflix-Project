import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router';



const Modal = ({ data, handleModalClose, scrollY }) => {
  const navigate = useNavigate()

  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

  return createPortal(
    <div style={{ top: scrollY }} onClick={handleModalClose} className="absolute left-0 w-screen h-screen bg-black/30 flex items-center justify-center">
      <motion.div initial={{ opacity: 0 }}animate={{ opacity: 1, transition: { duration: 0.3 } }} className="relative w-[620px] border border-zinc-600 rounded-lg bg-zinc-900 ">
        <div className=" border-px border-zinc-800 rounded-lg bg-zinc-900  relative" > 
          <button
            onClick={handleModalClose} className="z-10 absolute top-4 right-4 size-[18px] hover:bg-zinc-500/25 hover:cursor-pointer">
            <svg className=" w-[23px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </button>
        

        


        <div onClick={
          (e) => { 
            e.stopPropagation()}

           } className="relative">

          <div className="absolute w-full h-full bg-gradient-to-tr from-zinc-900 from-25% via-transparent via-55% flex items-end">
          <h3 className="text-white text-5xl font-bold ml-8 mb-6"> {data.media_type === "movie" ? data.title : data.name}</h3>
          </div>
          <img className="w-full h-full"src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt=""/>
        </div>




        <div onClick={
          (e) => { 
            e.stopPropagation()}

           } className="px-8 pb-5">
            
          <p className="text-white">{data.overview.slice(0,120)}</p>
          <button onClick={() =>{navigate('/SignUp')}} className="flex items-center justify-center bg-[#e50914] hover:bg-[#c22f27] text-white text-xl h-full px-4 py-3 pr-6 mt-8 rounded hover:bg-red-700 active:bg-red-800 focus:outline-none ">Get Started
          <svg className="w-[12px] ml-[7px] pt-[4px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
          </button>
        </div>
      </div>
      </motion.div>
    </div>,
    document.body
  );
};

export default Modal;
