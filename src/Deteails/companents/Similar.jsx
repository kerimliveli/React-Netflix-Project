import { useEffect, useState } from 'react'
import { useStore } from 'zustand'
import { themeStore} from "Common/Store.js"
import ScrollButton from '../../Landing/companent/ScrollButton'
import Card from 'Common/Card';

const Similar = ({id , type}) => {
    const [data , setData] = useState([])
    const {token} = useStore(themeStore)



    const getSimilar = async()=> {
        try{
            const response = await fetch(`http://localhost:5001/api/v1/${type}/${id}/similar` , {
                headers :{
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })

            const data = await response.json()

            if(response.ok){
                setData(data.similar)
            }

        } catch {
            console.error(error)
        }

    }


    useEffect(() =>{
        getSimilar()     
        
    }, [type , id])



  return (
    <div className="mt-10" >

        <h2 className="text-white text-2xl mb-4 " >Similar {type === "tv" ? "Tv Shows" : "Movies"} </h2>


         <div className="relative">
            <ScrollButton direction="left" />
            <div  id="movie-card-container" className="flex items-center gap-4 overflow-scroll overflow-x-hidden overflow-y-hidden">
                {data.map((item) => ( <div className="flex-shrink-0 "> <Card item={item} type={type} /> </div> ))}
            </div>
            <ScrollButton direction="right" />
         </div>


         

        


    </div>
  )
}

export default Similar