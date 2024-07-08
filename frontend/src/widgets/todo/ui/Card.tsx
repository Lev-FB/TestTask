import {DeleteButton, ReplaceForm} from "../../../features/todo";
import './Card.css';
import {observer} from "mobx-react-lite";
import {useStore} from "../../../shared/lib/useStore";
import {Button} from "../../../shared/ui/button";

interface Props {
    id: number,
    text?: string,
    done?: boolean,
    index:number
}


const Card = observer(({ id,index }: Props) => {
    const store = useStore();
    const item = store.getTodo(index);

    return (
        <div className={`card ${item?.done ? 'done' : ''}`}>
            <div className='infoWrapper'>
                <p className='id'>{index+1}.</p>
                <p className='title'>{item?.title}</p>
                <p className='text'>{item?.text}</p>
            </div>
            <div className='logicWrapper'>
                <DeleteButton onClick={() => {
                    store.deleteTodo(item.id);
                }} />
                <ReplaceForm id={id} />
                <Button className='switchDone' onClick={() => store.switchDone(index)} title='Закончить' />
            </div>
        </div>
    );
});

export default Card;