const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

const mongoose = require('mongoose')

const app = express()

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080



//morgan log request
app.use(morgan('tiny'));

//mongodb server connection
mongoose.connect('mongodb://localhost/crudDB')
mongoose.connection
.once('open', ()=>console.log('succesfully connected to mongodb database'))
.on('error', (err)=>console.log(err))


//parse request
app.use(express.urlencoded({extended: true}))

//view engine
app.set('view engine', 'ejs')


//public folder
app.use(express.static('public'))

//all routers
app.use('/', require('./server/routes/router'))


app.listen(PORT, ()=>{
    console.log(`server is running on localhost port: ${PORT}`)
})