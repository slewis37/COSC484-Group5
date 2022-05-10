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
                    {/* <div className="logo"> */}
                        <h2 className="logo" style={{width: '324px !important'}}>Eazy Eats <em className = "tuColor">TU</em></h2>
                    {/* </div> */}

                    {/* <div className = "nav"> */}
                        <ul className='nav-links' style={{width: '624px !important'}}>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/recipeView">Recipies</Link>
                          </li>
                          <li>
                            <Link to="/inventory">My Inventory</Link>
                          </li>
                          <li>
                            <Link to="/recipeSearch">Search</Link>
                          </li>
                          {/* <li>
                            <Link to="/recipeView">Recipes</Link>
                          </li> */}
                        </ul>
                      {/* </div> */}

                      {/* <div className="profile-img">                 */}
                          <img className="profile-img" src="https://www.pngkey.com/png/full/202-2024691_my-profile-comments-my-profile-icon-png.png " alt=" "/>        
                      {/* </div> */}
                  </div>
        </div>
    </header>
    );
}

export default Navbar;
