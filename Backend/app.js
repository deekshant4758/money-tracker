const express = require('express')
const cors = require('cors')
const app = express()
const {db} = require('./db/db');
const {readdirSync} =require('fs')


require ('dotenv').config()


//middleWares

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello World')
})

const PORT = process.env.PORT 

//routes

readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/'+ route)))


const server = () =>{

    app.listen(PORT,()=>{
        db()
        console.log('listening to the port',PORT);
    })
}

server()