const express = require('express')
const DBController = require('../model/DBController')
const todoRouter = express.Router()
const TODOS_URL = '/todos/'
todoRouter.get(TODOS_URL,(req,res)=>{
    let data
    DBController.readTodos().then(DBdata=>data = DBdata).then(()=>res.end(JSON.stringify(data)))
    console.log(req.body)
})

todoRouter.post(TODOS_URL, (req, res) => {
    DBController.createTodo(req.body.title,req.body.text,req.body.done,req.body.id).then(()=>{
        res.end(JSON.stringify({error:false}))
    })
});

todoRouter.delete(TODOS_URL, (req, res) => {
    DBController.deleteTodo(req.body.id).then((error)=>{
        res.end(JSON.stringify({error:false}))
    })
});

todoRouter.patch(TODOS_URL, (req, res) => {
    DBController.updateTodo(req.body.id,req.body.text,req.body.done).then(()=>{
            res.end(JSON.stringify({error:false}))
    })
});
module.exports = todoRouter
