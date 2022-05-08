/*\
 *
 *  Landing page.
 * 
\*/

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


const Home = () => {

    const users = useSelector((state)=>state.users);
    console.log(users)

    return ( 
        <div className = "full-contain">

        <div className = "side-text">
        <h1> GET <br/>
        COOKIN '<br/>
        GOOD <br/>
        LOOKIN ' </h1> 
        <p> Over 25, 000 recipies catered just
        for you!! </p> 
        </div>


        <div className = "btns">

        <Link to = "/register" > 
        <button type = "button" className = "register-btn"> REGISTER </button>
        </Link>

        <Link to = "/login" > 
        <button type = "button" className = "login-btn"> LOGIN </button>
        </Link>

        </div> 
        </div>
    )
}
export default Home;