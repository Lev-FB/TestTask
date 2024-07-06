import {makeObservable, observable, action, runInAction} from "mobx";
import type {CardType} from "../shared/types/Card";
import {URL} from "../shared/consts/url";

class Store {
    todos: CardType[] = []
    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodo: action,
            deleteTodo:action,
            replaceTodoText:action,
            getTodo:action,
            switchDone:action,
            getServerTodos:action,
            deleteServerTodo:action,
            patchServerTodo:action,
            createServerTodo:action
        });
    }

    async getServerTodos(){
        const data = await fetch(URL, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        const preparedData:CardType[] = await data.json()
        console.log(preparedData)
        runInAction(()=>{
            this.todos = preparedData
        })

    }

    async deleteServerTodo(id:number){
        const data = await fetch(URL,{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id})
        })
        const preparedData:CardType[] = await data.json()
        runInAction(()=>{
            this.todos = preparedData
        })

    }

    async patchServerTodo(id:number,text:string){
        const item = this.getTodo(id)
        console.log({id,title:item.title,text,done:item.done})
        const data = await fetch(URL,{
            method:"PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id,title:item.title,text:text,done:item.done})
        })
        const preparedData:CardType[] = await data.json()
        runInAction(()=>{
            this.todos = preparedData
        })

    }

     createServerTodo =  async (id:number,title:string,text:string,done:boolean,) => {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,text,done,id
            })
        });

        const data = await response.json();
        console.log(data);
    };

    replaceTodoText (id:number,text:string) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.text = text;
        }
        this.patchServerTodo(id,text)
    }
    addTodo(title: string, text:string, done:boolean) {
        this.todos.push({ title, text, id: this.todos.length+1,done});
        this.createServerTodo(this.todos.length,title, text ,done)
    }

    switchDone(id:number) {
        this.todos[id-1].done=!this.todos[id-1]?.done
        this.patchServerTodo(id,this.getTodo(id)?.text)
    }

    deleteTodo(id: number) {
        this.todos = this.todos
            .filter((el) => el.id !== id)
            .map((el, i) => {
                return { ...el, id: i + 1 };
            });
        this.deleteServerTodo(id)
    }
    getTodo(id:number):CardType {
        return this.todos[id-1]
    }
}
export default new Store()