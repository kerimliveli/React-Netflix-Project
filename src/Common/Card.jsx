import React from 'react'
import { useNavigate } from 'react-router'

const Card = ({item , type}) => {
    const navigate = useNavigate()

  return (
    <button onClick={() => {
        navigate("/details",{
            state: {
                id: item.id,
                type: type ? type : item.media_type
            }
        })
    } }>
        <img className="min-w-[180px] h-[250px] justify-self-center hover:scale-110 transition duration-150 ease-in  " src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
    </button>
    
  )
}

export default Card