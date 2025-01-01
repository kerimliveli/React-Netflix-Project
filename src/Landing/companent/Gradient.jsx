import React from 'react'

const Gradient = () => {
  return (
    <div class="relative w-screen -mt-12 h-[50px] border-4 border-transparent bg-gradient-to-r from-pink-700 via-red-600 to-pink-700 bg-clip-border rounded-tl-[50%_100%] rounded-tr-[50%_100%]">
            <div className="absolute -left-[4px] top-[1px] h-[50px] w-screen bg-gradient-to-b rounded-tl-[50%_90%] rounded-tr-[50%_90%] from-blue-950 from-10% to-black to-90%"></div>
        </div>
  )
}

export default Gradient