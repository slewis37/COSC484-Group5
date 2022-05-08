/*\
 *
 * All the code in here is run when the server starts up.
 * Pretty much we're just setting up routes for 
 * HTTP requests and establishing a connection to the database.
 * 
\*/
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import router from './routes/users.js';
dotenv.config();
const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/users', router);// http://localhost:5000/users


const CONNECTION_URL = ''+process.env.ATLAS_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
    .catch((err)=>console.log(err.message));
