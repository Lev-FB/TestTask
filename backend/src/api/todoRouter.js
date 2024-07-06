const express = require('express')
const DB = require('../model/DB')
const todoRouter = express.Router()

todoRouter.get('/todos/',(req,res)=>{
    res.end(JSON.stringify(DB.readTodos()))
    console.log(req.body)
})

todoRouter.post('/todos/', (req, res) => {
    DB.createTodo(req.body.title,req.body.text,req.body.done,req.body.id)
    console.log(req.body); // No need to parse again, body-parser handles it
    res.end(JSON.stringify(DB.readTodos()))
});

todoRouter.delete('/todos/', (req, res) => {
    DB.deleteTodo(req.body.id)
    res.end(JSON.stringify(DB.readTodos()))
});
todoRouter.patch('/todos/', (req, res) => {
    DB.updateTodo(req.body.id,req.body.text,req.body.done)
    res.end(JSON.stringify(DB.readTodos()))
});
module.exports = todoRouter