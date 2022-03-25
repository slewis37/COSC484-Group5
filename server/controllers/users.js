/*\
 *
 * These are all functions that handle different HTTP requests. 
 * They get used in files in the 'server/routes/' folder.
 * 'req' is the request document and 'res' is the response document.  
 * 
\*/

import argon2 from 'argon2';
import {User} from '../models/user.js';
const testCallback = (fnName, res) =>{
    res.send(fnName+' Works!');
}

/*\
 *
 *  HTTP status codes reference: https://www.restapitutorial.com/httpstatuscodes.html
 * 
\*/

export const getUsers = (req, res) => {
    console.log('getting all users');
    User.find()
        .then(users => res.status(200).json(users))//200 OK
        .catch(e => res.status(400).json('ERROR - ' + e));//400 Bad Request
}

export const createUser = async (req, res) => {
    const {email, fname, lname, _} = req.body;
    const password = await argon2.hash(req.body.password);
    const inventory = [];

    const newUser = new User(email, fname, lname, password, inventory);

    User.count({email: email}, async (e, ct) => {
        if(e){
            console.log("ERROR: " + e);
            return res.status(409).json('ERROR - ' + e)//409 Conflict
        }
        if(ct>0){
            console.log("Email already belongs to an account");
            return res.status(409).json('Email already belongs to an account')//409 Conflict
        }
        await newUser.save()
        res.status(201).json(newUser);//201 Created
    })
}