import React from "react";
import { useState } from "react";

const Footer = () => {

        const [selectedLanguage, setSelectedLanguage] = useState("en");
    
        const handleChange = (event) => {
        setSelectedLanguage(event.target.value);}


  return ( 
    
    

    <footer className=" text-white/70 py-20   ">
      {/* <a href="#" className="px-[130px]  underline" >Questions? Contact us.</a> */}
      <h3 className="px-[130px]  underline mb-[35px] " >Questions? Contact us </h3>
      
      <div className=" px-[130px] grid grid-cols-4 underline ">
        <div className="flex flex-col space-y-2 ">
          <a href="#" >FAQ</a>
          <a href="#" >Investor Relations</a>
          <a href="#" >Privacy</a>
          <a href="#" >Speed Test</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="#" >Help Center</a>
          <a href="#" >Jobs</a>
          <a href="#" >Cookie Preferences</a>
          <a href="#" >Legal Notices</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="#" >Account</a>
          <a href="#" >Ways to Watch</a>
          <a href="#" >Corporate Information</a>
          <a href="#" >Only on Netflix</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="#" >Media Center</a>
          <a href="#" >Terms of Use</a>
          <a href="#" >Contact Us</a>
        </div>
      </div>

    <div className="px-[130px] pt-[50px] ">
    <select className=" w-[128px] h-[32px] px-2 rounded bg-gray-200/10  border border-gray-700 text-white text-lg " value={selectedLanguage} onChange={handleChange}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
    </select>

    </div>

    <h3 className="text-sm text-white px-[130px] pt-[45px]  ">Netflix Azerbaijan</h3>

    </footer>
  )
}

export default Footer;