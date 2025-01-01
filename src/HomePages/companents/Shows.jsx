import React from 'react'
import { motion } from "framer-motion";
import Card from 'Common/Card';

const Shows = ({data}) => {
  return(
    <motion.div initial ={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.3}}}  >
     <div className="px-[90px] pt-[120px]" >
      <h1 className=" text-white text-3xl mb-5 " >TV Shows</h1>
      <div className="grid grid-cols-5  gap-10  " >
          {data.map(item => <Card item={item}/>)}
      </div>
     </div>
     
    </motion.div>

  )
}

export default Shows
