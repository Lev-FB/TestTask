import {Button} from "../../../shared/ui/button";
import './DeleteButton.css'
const DeleteButton = ({onClick}:{onClick:()=>void}) =>{
    return <Button title='Удалить'   className='deleteButton' onClick={onClick} />
}
export default DeleteButton