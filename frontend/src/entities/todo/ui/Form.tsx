import {Input} from "../../../shared/ui/input";
import {Button} from "../../../shared/ui/button";
import React, {useState} from "react";
import './Form.css'
import {observer} from "mobx-react-lite";

interface Form {
    title:string,
    text:string,
    error?:string
}
interface Props {
    handleClick:(data:Form)=>void
}
const Form = observer(({handleClick}:Props) => {
    const [inputsValue,setInputsValue] = useState<Form>({title:'',text:''})
    const handleChange:React.ChangeEventHandler<HTMLInputElement> =(e)=>setInputsValue({...inputsValue,[e.target.name]:e.target.value})
    return <form className='form'>
        <label htmlFor="title">
            <p className='label'>Введите todo :</p>
            <Input placeholder='Тема' maxLength={21} className='input' type="text" name='title' onChange={handleChange}/>
        </label>
        <Input placeholder='Заметка' maxLength={40} className='input' type="text" name='text' onChange={handleChange}/>
        <Button title='Добавить' onClick={() => {
            if (inputsValue.text.length && inputsValue.title.length) handleClick(inputsValue)
        }} className='button'/>
    </form>
})

export default Form