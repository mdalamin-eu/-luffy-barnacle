const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const connectDB = async () => {
    try{
        await mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
        });
        
        console.log('database connection successfully');
    }catch(err){
        console.error(err.message);
        process.exit(1);       
    }
}

module.exports = connectDB;