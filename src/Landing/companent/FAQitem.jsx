import { motion, AnimatePresence } from "framer-motion";
import React from 'react'


const FAQitem = ({item , openAccordion , setOpenAccordion}) => {
  const itemOpen = openAccordion === item.id

  return (
    <button  onClick={() => {
        setOpenAccordion(prevstate => prevstate !== item.id ? item.id : null)
    }}  
    className="bg-[#2D2D2D] " >
        <div className="flex items-center justify-between px-[24px] py-[28px] border-b-[1px] border-black hover:bg-[#404040] translation duration-200 ease-in " >
            <h3 className="text-[24px] text-white  " >{item.title}</h3>
            <svg  className={`${itemOpen ? "size-[24px] rotate-45" : "size-[24px] rotate-0"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>

        </div>
        {/* {openAccordion === item.id && <div> <p className="text-white text-[24px] font-medium" >{item.desc}</p> </div>}      */}

     

        <AnimatePresence initial={false}>
                {itemOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { height: 0 }
                        }}
                        transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className='px-[24px] py-[28px]'>
                            <p className='text-left text-[24px] text-white'>
                                {item.desc.split("[break]")[0]}  
                                <br />
                                <br />
                                 {item.desc.split("[break]")[1]}
                            </p>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
    </button>
  )
}

export default FAQitem
