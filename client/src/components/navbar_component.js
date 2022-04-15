/*\
 *
 *  Enables navigation between pages.
 * 
\*/


import React from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        
        <header className="header">
            <div className="container2">
                <div className="row space-between algin-items-center">
                    <div className="logo">
                        <h2>cheapFoodie</h2>
                    </div>

        <div className = "nav">
            <ul className='nav-links'>
    <li>
      <Link to="/" className='active'>Home</Link>
    </li>
    <li>
      <Link to="/recipeView">Recipies</Link>
    </li>
    <li>
      <Link to="/cuisines">Cuisines</Link>
    </li>
    <li>
      <Link to="/drinks">Drinks</Link>
    </li>
    <li>
      <Link to="/support">Support</Link>
    </li>
    </ul>
  </div>

  <div className="profile-img">
                        
                        <img src="https://www.pngkey.com/png/full/202-2024691_my-profile-comments-my-profile-icon-png.png " alt=" "/>
                    
                </div>
            </div>
        </div>
    </header>
    );
}

export default Navbar;