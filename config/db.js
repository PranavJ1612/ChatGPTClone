const mongoose = require('mongoose');
const colors = require('colors');

const connectDB= async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`connection successfully ${mongoose.connection.host}`.bgCyan.white);
    }catch(err){
        console.log(`Error connecting to DB: ${err}`.red)
    }
}

module.exports = connectDB