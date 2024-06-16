import { MONGODB_URI } from './config/utils.js';
const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect(MONGODB_URI)

const connection = mongoose.connection;

connection.on("connected", ()=>{
    console.log('MongoDB connection Successfull.');
})

connection.on("error", (err)=>{
    console.log('MongoDB connection failed.')
})