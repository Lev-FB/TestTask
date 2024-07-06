import React from "react";
import './Input.css'
interface Props {
    className:string,
    type: React.HTMLInputTypeAttribute,
    name:string,
    onChange:React.ChangeEventHandler<HTMLInputElement>,
    placeholder:string
    ,maxLength:number,
    value :string

}
const Input = ({className,type,name='',onChange,placeholder,maxLength,value}:Props) =>{
    return <input minLength={1}  className={className} onChange={onChange} maxLength={maxLength} placeholder={placeholder} value={value}  type={type} name={name} />

}
export default Input