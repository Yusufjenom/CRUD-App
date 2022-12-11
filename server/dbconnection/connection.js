const mongoose = require('mongoose')


const connectDB = async()=>{
const con = await mongoose.connect(process.env.MONGO_URL)
mongoose.connection
.once('open', ()=>console.log('successfully connected to database'))
.on('error', (err)=>console.log(err))
}

module.exports = connectDB