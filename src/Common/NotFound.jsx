import React from 'react'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center"  >

        <div>
            <button className="w-[110px] h-[40px] flex items-center justify-center bg-red-800 text-white  " > Go Back </button>
        </div>
        <div>
          <p className="text-white text-xl" >Page you were looking for is not available</p>
        </div>
    </div>
  )
}

export default NotFound