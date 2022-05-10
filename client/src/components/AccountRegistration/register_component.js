/*\
 *
 *  Register a new account
 * 
\*/

import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createUser } from '../../actions/users'
import { Link } from 'react-router-dom';
import './AccountRegistration.css';


const Register = () => {
    const [postData, setPostData] = useState({ email: '', fname: '', lname: '', password: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(postData));
    }

    return ( <
        >
        <
        h1 className = "login-centered" > EasyEatsTU Account Registration < /h1> <
        form class = "suContent"
        onSubmit = { handleSubmit } >
        <
        div class = "contain" >
        <
        h2 > Please Fill Out The Fields To Sign Up < /h2> <
        hr / >
        <
        label
        for = "uname" > First Name < /label><br></br >
        <
        input type = "text"
        id = "uname"
        name = "uname"
        value = { postData.fname }
        placeholder = "Enter First Name"
        onChange = {
            (e) => setPostData({...postData, fname: e.target.value })
        }
        required / > < br > < /br> <
        label
        for = "uname" > Last Name < /label><br></br >
        <
        input type = "text"
        id = "uname"
        name = "uname"
        value = { postData.lname }
        placeholder = "Enter Last Name"
        onChange = {
            (e) => setPostData({...postData, lname: e.target.value })
        }
        required / > < br > < /br>

        <
        label
        for = "email" > Email Address < /label><br></br >
        <
        input type = "text"
        id = "email"
        name = "email"
        value = { postData.email }
        placeholder = "Enter Email"
        onChange = {
            (e) => setPostData({...postData, email: e.target.value })
        }
        required / > < br > < /br>

        <
        label
        for = "pword" > Password < /label><br></br >
        <
        input type = "password"
        id = "pword"
        name = "pword"
        value = { postData.password }
        placeholder = "Enter Password"
        onChange = {
            (e) => setPostData({...postData, password: e.target.value })
        }
        required / > < br > < /br> <
        label
        for = "vpword" > Verify Password < /label><br></br >
        <
        input type = "password"
        id = "vpword"
        name = "vpword"
        placeholder = "Verify Password"
        required / > < br > < /br>

        <
        div class = "clear" >
        <
        button type = "reset"
        class = "cancel" > Clear < /button> <
        Link to = "/inventory" >
        <
        button type = "submit"
        class = "signup" > Sign Up < /button> < /
        Link > <
        /div> < /
        div > <
        Link to = "/" >
        <
        button type = "button"
        class = "home" > Back to Homepage < /button> < /
        Link > <
        /form> < / >
    );
}

export default Register;