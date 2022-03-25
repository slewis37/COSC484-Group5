/*\
 *
 *  Landing page.
 * 
\*/

import React from 'react';

const Home = () => {
    return (
        <div className="full-contain">
        <header className="header">
            <div className="container">
                <div className="row space-between algin-items-center">
                    <div className="logo">
                        <a href="#">cheapFoodie</a>
                    </div>
                
                    <nav className="nav">
                        <ul className="nav-links">
                            <li><a href="#" class="active">Home</a></li>
                            <!-- <li><a href="#">Login</a></li> -->
                            <li><a href="#">Recipies</a></li>
                            <li><a href="#">Cuisines</a></li>
                            <li><a href="#">Drinks</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </nav>

                    <div className="profile-img">
                        <a href="#">
                            <img src="https://www.pngkey.com/png/full/202-2024691_my-profile-comments-my-profile-icon-png.png " alt="profile icon image"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <div className="side-text">
            <h1>GET <br>
                COOKIN'<br>
                GOOD <br>
                LOOKIN'
            </h1>
            <p>Over 25,000 recipies catered just for you!!</p>
        </div>
    

        <div className="btns">
            <a href="#">
                <button type="button" className="register-btn">REGISTER</button>
            </a>
            <a href="#">
                <button type="button" className="login-btn">LOGIN</button>
            </a>
        </div>
    </div>
    );
}

export default Home;
