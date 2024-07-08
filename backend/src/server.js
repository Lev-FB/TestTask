const express = require('express')
const cors = require('cors')
const {PORT} = require('./config/consts')
const todoRouter = require('./api/todoRouter')
const s = express()
s.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})

s.use(express.json())
s.use(cors())
s.use('/api', todoRouter)

