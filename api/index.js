import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//Below it's for local MongoDB
// mongoose.connect('mongodb://localhost:27017/express-mongo', {})
// Connect the MongoDB Cloud
mongoose.connect(process.env.MONGOURL)
        .then(() => {
            console.log("MongoDB is connected!")
        })
        .catch((err) => {
            console.log(err);
        });


const app = express();

app.listen(3000, ()=>{
    console.log('Server is listening on 3000.');
})


