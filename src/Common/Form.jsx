import React from 'react'
import FormInput from './FormInput';


const Form = ({ headerText, setFormData, formItems , formButtons, formStyle="flex flex-col gap-4 max-w-[400px] mx-auto pt-12" }) => {
    const handleInputChange =(name,value) => {
        setFormData(prevState=> ({...prevState, [name]: value }));

    };
    
  return (

        <form onSubmit={(e) => {
             e.preventDefault()
            }} className={formStyle} >
              {headerText && <h1 className={headerText.style} >{headerText.title}</h1>}   
        {
            formItems.map(item => <FormInput key={item?.name}  label={item?.label} name={item?.name} type={item.type} placeholder ={item?.placeholder} handleInputChange={handleInputChange} inputStyle={item?.inputStyle}  /> )
        }

        {
            formButtons.map(button => <button  key={button.title} onClick={button.action} className={button.style}>{button.title}</button> )
        }


    </form>
  )
}

export default Form