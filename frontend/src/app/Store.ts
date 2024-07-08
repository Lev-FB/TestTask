import {runInAction, makeAutoObservable} from "mobx";
import type {CardType} from "../shared/types/Card";
import {URL} from "../shared/consts/url";

class Store {
    todos: CardType[]= []
    constructor() {
        makeAutoObservable(this)
    }

    async getServerTodos(){
        const data = await fetch(URL, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        const preparedData:CardType[] = await data.json()
        runInAction(()=>{
            this.todos = preparedData
        })

        if(data.ok){
            console.log('Данные успешно прочитаны')
        }

    }

    async _deleteServerTodo(id:number){
        const res =await fetch(URL,{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id})
        })
        if(res.ok){
            console.log('Данные успешно обновлены')
        }
    }

    async _patchServerTodo(id:number,text:string){
        const item = this.todos.find(el=>el.id===id)
        const res =await fetch(URL,{
            method:"PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id,title:item.title,text,done:item.done})
        })
        if(res.ok){
            console.log('Данные успешно обновлены')
        }


    }

     _createServerTodo =  async (id:number,title:string,text:string,done:boolean,) => {
        const res =await fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,text,done,id
            })
        });

        if(res.ok){
            console.log('todo создана')
        }
    };

    replaceTodoText (id:number,text:string) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.text = text;
        }
        this._patchServerTodo(id,text)
    }
    addTodo(title: string, text:string, done:boolean) {
        this.todos.push({ title, text, id: this.todos.length+1,done});
        this._createServerTodo(this.todos.length,title, text ,done)
    }

    switchDone(index:number) {
        this.todos[index].done=!this.todos[index]?.done
        const item = this.getTodo(index)
        if(item.done){
            this.todos.splice(index,1)
            this.todos.unshift(item)
        }else {
            this.todos.splice(index,1)
            this.todos.push(item)
        }
        this._patchServerTodo(item.id,item.text)
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter((el) => {
            return  el.id !== id

        })
        this._deleteServerTodo(id)
    }
    getTodo(id:number):CardType {
        return this.todos[id]
    }
}
export default new Store()