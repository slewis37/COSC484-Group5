/*\
 *
 * All the code in here is run when the server starts up.
 * Pretty much we're just setting up routes for 
 * HTTP requests and establishing a connection to the database.
 * 
\*/

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import usersRouter from './routes/users.js';

const app = express();

app.use('/users', usersRouter);// http://localhost:5000/users

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

//////////////////////////////////
/*  CHANGE TO ENV VARIABLE      */
    const atlasUname = 'g5admin';
    const atlasPassword = 's22gp484';
    const CONNECTION_URL = 'mongodb+srv://g5admin:s22gp484@cosc484-g5.lfxak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//////////////////////////////////
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
    .catch((err)=>console.log(err.message));
