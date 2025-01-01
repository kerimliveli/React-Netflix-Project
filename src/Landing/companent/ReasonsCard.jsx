import React from 'react'


const ReasonsCard = ({item}) => {
  return (
    <div className="bg-gradient-to-br from-[#192247] to-[#210E17] h-[268px] w-full rounded-[16px]   ">
      <h3 className="text-white text-[24px] font-medium pt-[13px] pl-[15px]" >{item.title}</h3>
      <p className="text-white/70 pt-[15px] pl-[15px]"  >{item.desc}</p>
      <img className="size-[60px] absolute top-[1632px] ml-[265px] " src={item.img} alt="" />
    </div>
  )
}

export default ReasonsCard
