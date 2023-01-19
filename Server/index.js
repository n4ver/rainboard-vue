const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const TodoListRoutes = require('./routes/api/todoList')
const path = require('path')

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

app.use(cors()) // to allow cross origin requests
app.use(bodyParser.json()) // to convert the request into JSON

app.get('/', (req, res) => {
    res.send('Hello World')
})

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.use('/api/todoList', TodoListRoutes)

app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`))