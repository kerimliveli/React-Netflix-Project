import q1 from "images/q1.svg"
import q2 from "images/q2.svg"
import q3 from "images/q3.svg"
import { useNavigate } from 'react-router'




const Home = ({visibleItem , item , type  }) => {
  

  const navigate = useNavigate()

  return (

      visibleItem && <div style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${visibleItem.backdrop_path})`
        }} className={`flex items-center h-screen w-full bg-cover bg-no-repeat bg-black/50  bg-blend-overlay`} >
      <div className="mac-w-[400px] ml-[90px] " >

        <h2 className="text-white text-7xl mb-4  " >{visibleItem.title} </h2>

        <div className="flex items-center gap-2">
          <img src={q2} alt="" />
          <h3 className="text-white font-bold text-2xl" >#1 in Movies Today</h3>
        </div>
        <div className="text-white mt-4 "  >
        <p  >{visibleItem.overview.slice(0,50)}</p>
        <p  >{visibleItem.overview.slice(50,100)}</p>
        <p  >{visibleItem.overview.slice(100,150)}</p>
        <p  >{visibleItem.overview.slice(150,190)}...</p>
        </div>
        
      

        <div className="flex items-center gap-2 mt-4" >
            <button className="bg-white px-6 py-3 font-bold text-black rounded-[4px] flex items-center gap-2 " >  <img className="size-4"  src={q1} alt="" /> Play
            
            </button>

            {/* <button  onClick={() => {
                navigate("/details",{
            state: {
                id: item.id,
                type: type ? type : item.media_type}})
            }} className="bg-white px-6 py-3 font-bold text-black rounded-[4px] flex items-center gap-2 " >  <img className="size-4"  src={q1} alt="" /> Play</button> */}
            <button className="bg-[#515451] px-6 py-3 rounded-[4px] flex items-center gap-2 text-white " >  <img className="size-4"  src={q3} alt="" /> More Info</button>
        </div>

        <div className="m-[10px]">
          



     

        </div>

      </div>

      

    </div>
  )
}

export default Home
