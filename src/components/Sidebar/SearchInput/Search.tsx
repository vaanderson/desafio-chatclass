
import { useState } from "react";
import { InputContainer } from "./styles"


export function SearchInput({callback}:{callback: (city:string)=>void}){
    const [value, setValue] = useState<string>('')
    const handleSubmit = (event:any) =>{
        callback(value)
        event.preventDefault();
      }
    
      const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        let ValueVerified = event.target.value
        setValue(ValueVerified);
      }
    
    return(
        <InputContainer onSubmit={(event)=>{handleSubmit(event)}}>
            <input value={value} onChange={(event)=>handleChange(event)} type="text" placeholder="Digite o nome da cidade" />
        </InputContainer>
    )
}