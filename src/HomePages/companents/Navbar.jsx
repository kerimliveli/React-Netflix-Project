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

        <div className="flex ml-10 gap-2 mt-[3px] " >
            <svg className="size-[19px] mt-[3px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg>


          <Search query={query} setQuery={setQuery}  
           />
        </div>

       

        
        
    
     </div>

     
  )
}

export default Navbar
