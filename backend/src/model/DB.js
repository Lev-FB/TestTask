class DB {
    todos = []
    constructor() {}
    readTodos () {
        return this.todos
    }
    deleteTodo(id){
        this.todos = this.todos
            .filter((el) => el.id !== id)
            .map((el, i) => {
                return { ...el, id: i + 1 };
            });
    }
    createTodo (title,text,done,id){
        this.todos.push({id,text,title,done})
    }

    updateTodo(id,text,done) {
        this.todos[id-1].text= text
        this.todos[id-1].done= done
    }

}


module.exports = new DB()