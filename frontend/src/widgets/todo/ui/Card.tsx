import {DeleteButton, ReplaceForm} from "../../../features/todo";
import './Card.css';
import {observer} from "mobx-react-lite";
import {useStore} from "../../../shared/lib/useStore";
import {Button} from "../../../shared/ui/button";

interface Props {
    id: number;
    text?: string;
    done?: boolean;
}

const Card = observer(({ id }: Props) => {
    const store = useStore();
    const item = store.getTodo(id);

    return (
        <div className={`card ${item?.done ? 'done' : ''}`}>
            <div className='infoWrapper'>
                <p className='id'>{item?.id}.</p>
                <p className='title'>{item?.title}</p>
                <p className='text'>{item?.text}</p>
            </div>
            <div className='logicWrapper'>
                <DeleteButton onClick={() => {
                    store.deleteTodo(id);
                }} />
                <ReplaceForm id={id} />
                <Button className='switchDone' onClick={() => store.switchDone(id)} title='Закончить' />
            </div>
        </div>
    );
});

export default Card;