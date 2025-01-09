import React from 'react'
import { useNavigate } from 'react-router';
import Search from './Search';


const Navbar = ({tabItems, setSelectedTab , selectedTab , query, setQuery}) => {
  const navigate = useNavigate()
  return (
    <div className=" absolute top-0 left-0 flex items-center py-[30px] px-[90px] ">
      
        <button onClick={() =>{
             navigate('/')
         }} >
              <img className="w-[9rem] h-[3rem]" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        </button>

        <div className="flex items-center gap-[28px] ml-[67px] ">
        {
        tabItems.map(item => <button className={`${selectedTab.value === item.value ? "text-white font-bold " : "text-zinc-300 text-[22px] "    }`} onClick={() => {
            setSelectedTab(item)
        }}>{item.title}</button>)

        }

          
        </div>

        

       

        
        
    
     </div>

     
  )
}

export default Navbar
