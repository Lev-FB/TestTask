import {observer} from "mobx-react-lite";
import {useStore} from "../../../shared/lib/useStore";
import {Input} from "../../../shared/ui/input";
import {useState} from "react";

interface Props {
    visible:boolean,
    id:number
}

const Replace = observer(({ visible, id }: Props) => {
    const store = useStore();
    const [value, setValue] = useState(store.getTodo(id)?.text);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        store.replaceTodoText(id, newValue);
    };

    return visible && (
        <Input
            className='replaceInput'
            name='replace'
            maxLength={40}
            placeholder='Введите новый текст'
            type='text'
            value={value}
            onChange={handleChange}
        />
    );
});

export default Replace;