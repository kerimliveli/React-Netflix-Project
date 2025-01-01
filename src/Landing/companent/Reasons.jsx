import React from 'react'
import ReasonsCard from './ReasonsCard'
import Foto1 from "images/Foto1.svg"
import Foto2 from "images/Foto2.svg"
import Foto3 from "images/Foto3.svg"
import Foto4 from "images/Foto4.svg"



const Reasons = () => {
    const items =[
        {
            title: "Enjoy on your TV",
            desc: "Watch on Smart TVs, Playstation ,Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img: Foto4

        },

        {
            title: "Download your shows to watch offline",
            desc: "Save your favorites easily and always have something to watch.",
            img: Foto1
        },

        {
            title: "Watch everywhere",
            desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            img: Foto2
        },

        {
            title: "Create profiles for kids",
            desc: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
            img: Foto3
        }

    ]


  return (
    <>
    <h2 className="text-white font-medium pb-[20px] text-[24px] flex pl-[130px] " >More Reasons to Join</h2>
    <div className="flex gap-4 px-[130px] ">
      
        {items.map(item => <ReasonsCard item={item}  />)}
    </div>
    </>
  )
}

export default Reasons
