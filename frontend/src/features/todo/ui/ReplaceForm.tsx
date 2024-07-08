import {Button} from "../../../shared/ui/button";
import './ReplaceForm.css'
import Replace from "./Replace";
import {useState} from "react";
import {observer} from "mobx-react-lite";

interface Props {
    id:number
}

const ReplaceForm = observer( ({id}:Props) =>{
    const [visible,setVisible] = useState(false)
    return <>

        <Button title={visible?'Закончить':'Редактировать'}   className='replaceButton' onClick={()=>{
            setVisible(!visible)
        }} />
        <Replace visible={visible} id={id} />
    </>
})
export default ReplaceForm