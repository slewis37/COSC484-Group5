/*\
 *
 * These are all functions that handle different HTTP requests. 
 * 'req' is the request document and 'res' is the response document.  
 * 
 * HTTP status codes reference: 
 * - https://www.restapitutorial.com/httpstatuscodes.html
 * 
\*/

import express from 'express';
import argon2 from 'argon2';
import User from '../models/user.js';

const router = express.Router();

////////////////////
// POST REQUESTS
////////////////////

router.route('/add').post(async (req, res) => {
    const {email, fname, lname, _} = req.body;
    const password = await argon2.hash(req.body.password);
    const inventory = [];
    
    const newUser = new User({email, fname, lname, password, inventory});
    
    User.count({email: email}, async (e, ct) => {
        if(e){
            console.log("ERROR - " + e);
            return res.status(409).json('ERROR - ' + e)//409 Conflict
        }
        if(ct>0){
            console.log("Email already belongs to an account");
            return res.status(409).json('Email already belongs to an account')//409 Conflict
        }
        await newUser.save().then(() => {newUser.password = "";})//dont want to return password
        res.status(201).json(newUser);//201 Created
    })
});

//get user by login credentials
router.route('/login').post(async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}, async function(e, user){
        if(e) {
            return res.status(409).json('ERROR - ' + e);
        }
        if(!user) {
            return res.status(400).json('ERROR - User with specified email could not be found');
        }
        const valid = await argon2.verify(user.password, password);
        if(!valid){
            return res.status(400).json('ERROR - Invalid Password');
        }
        return res.status(200).json(user);
    })
});

// delete
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('User deleted'))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

//update by id
router.route('/update/:id').post((req, res) => {
    var options = { upsert: false, new: true };
    User.findByIdAndUpdate(req.params.id, req.body, options, function(e, user) {
        if(e){ res.send(e); }
        else { res.json(user); }
    }); 
});

//update by email
router.route('/update/email/:email').post((req, res) => {
    var options = { upsert: false, new: true };
    User.findOneAndUpdate({email: req.body.email}, req.body, options, function(e, user) {
        if(e){ res.send(e) }
        else { res.json(user); }
    });
});



////////////////////
// GET REQUESTS
////////////////////

//all users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.status(200).json(users))//200 OK
        .catch(e => res.status(400).json('ERROR - ' + e));//400 Bad Request
});

//by id
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(e => res.status(400).json('ERROR - ' + e));
});

//by email
router.route('/email/:email').get((req, res) => {
    User.findOne({email: req.params.email})
        .then(user => res.json(user))
        .catch(e => res.status(400).json('ERROR - ' + e));
});

router.route('/update/email/:email').get((req, res) => {
    var options = { upsert: true, new: true };
    User.updateOne({email: req.params.email}, {$set: {"email": req.body.email}}, options, (e) => {
        if(e){ res.send(e); }
        else{ res.send("Updated User"); }
    });
});



export default router;