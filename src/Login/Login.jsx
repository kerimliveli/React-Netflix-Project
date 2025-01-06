import React, { useState } from 'react'
import Form from "Common/Form";
import { useNavigate } from 'react-router';
import {themeStore} from "Common/Store.js";
import { useStore } from 'zustand';
import Footer from '../Landing/companent/Footer';
import { div } from 'motion/react-client';

const Login = () => {
    const {addToken} =useStore(themeStore)
    const navigate = useNavigate()
    const [formData , setformData] = useState({})



    const login = async () => {
        try {
            const response = await fetch (" http://localhost:5001/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type":"application/json",
                     
                },

                body: JSON.stringify(formData)
            })

         const data = await response.json()

         
         if (response.ok){
            addToken(data.token)
            navigate('/home'); 
         }
         else {
            setError(data.message || "Giriş uygunsuz."); 
        }


        }catch (error){
            console.log(error)
        }
    }

    const formItems =[
        {
            label: "email",
            name: "email",
            type: "email",
            placeholder: "Email",
            inputStyle: "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white "
        },
        {
            label: "password",
            name: "password",
            type: "password",
            placeholder: "Password",
            inputStyle: "p-4 bg-transparent border-[1px] border-zinc-400  rounded-[4px] text-white "
            

        },
       
    ]

    const formButtons = [
        {
            title:"Sign In",
            style: "bg-[#E50914] text-white font-medium py-[3px] h-[40px] w-full rounded-[4px]  ",
            action: login

        },

        {
            title:"New to Netflix? Sign up now",
            style: "text-zinc-300 w-full mt-[25px] ",
            action: () => {navigate('/SignUp')}

        }
    ]


    



  return (
    <div>
        <div className="w-full h-screen px-[8rem] flex items-center justify-center bg-black bg-opacity-50 bg-blend-overlay bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg')]" >
         <button onClick={() =>{
             navigate('/')
         }} >
             <img className="w-[150px] absolute top-[24px] left-[168px] " src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
         </button>
         <Form
            headerText = { 
             {
                 title: "Sign In",
                    style:"text-white font-bold text-[32px]"
             }
         
            }
            formItems={formItems} 
            setformData={setformData} 
            formButtons={formButtons} 
            formStyle="w-[450px] h-[470px] bg-black/70 px-[68px] pt-[48px] flex flex-col gap-4 rounded-[4px]" />

        

        </div>

        <div>
            <Footer/>
        </div>



    </div>
  )
}

export default Login