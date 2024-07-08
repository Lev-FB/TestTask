const postgres = require('postgres');

const sql = postgres({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: null,
});
//Table = Todos
//CREATE TABLE public."Todos" (
//     id SERIAL PRIMARY KEY,
//     title TEXT NOT NULL,
//     text TEXT NOT NULL,
//     done BOOLEAN NOT NULL
// );

class DBController {
    async readTodos() {
        const res=  await sql`
            SELECT id, done, title, text
            FROM public."Todos";
        `
        const done = res.filter(el=>el.done)
        const notDone = res.filter(el=>!el.done)
        return   [...done,...notDone]
    }

    async deleteTodo(todoId) {
            await sql`
            DELETE FROM public."Todos" 
            WHERE id=${todoId}
        `
    }

    async createTodo(title, text, done) {
           await sql`
            INSERT INTO public."Todos" ( title, text, done)
            VALUES (
                       ${title},
                       ${text},
                       ${done}
                   )
        `
    }

    async updateTodo(id, text, done) {
        const res = await sql`
            UPDATE public."Todos"
            SET text = ${text}, done = ${done}
            WHERE id = ${id};
        `
        return res
    }
}

module.exports = new DBController();
