/*\
 *
 *  Landing page.
 * 
\*/

import React from 'react';



const Home = () => {
    
    return (
        <div className="full-contain">
        

        <div className="side-text">
            <h1>GET <br/>
                COOKIN'<br/>
                GOOD <br/>
                LOOKIN'
            </h1>
            <p>Over 25,000 recipies catered just for you!!</p>
        </div>
    

        <div className="btns">
            
                <button  type="button" className="register-btn">REGISTER</button>
           
                <button type="button" className="login-btn">LOGIN</button>
            
        </div>
    </div>
    );
}

export default Home;