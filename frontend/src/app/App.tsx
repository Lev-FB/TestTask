import './App.css'
import {Wrapper} from "../shared/ui/wrapper";
import {Form} from "../entities/todo";
import {Providers} from "./providers";
import {observer} from "mobx-react-lite";
import {useStore} from "../shared/lib/useStore";
import {Card} from "../widgets/todo";
import {useEffect} from "react";


const App = observer(() => {
    const store = useStore()
    useEffect(() => {
        store.getServerTodos()
    }, []);
    return (
        <>
            <Providers>
                <Wrapper>
                    <div>
                        <h1>Todo list</h1>
                    </div>
                    <div>
                        <Form handleClick={(data) => {
                            store.addTodo(data.title, data.text,false)
                        }} />
                    </div>
                    {store.todos.length === 0 ? <h2>Задач нет :(</h2> : store?.todos?.map((el, index) => <Card id={el.id}
                                                                                                           text={el.text}
                                                                                                           done={el.done}
                                                                                                           index={index}
                                                                                                           key={index}/>)}
                </Wrapper>
            </Providers>
        </>
    );
});

export default App
