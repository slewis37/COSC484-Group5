import React from 'react';

const Footer = () => {
    return (
        <div className = "footer" >
        <div className = "footer-elements">
            <div style={{paddingTop: 30}} className="row justify-content-center">
                <div style={{textAlign: "center"}} className="col-4">
                <h5 className = "h5-type">About US</h5>
                <p>Team members: 
                    Joseph Adrian •
                    Delilah Andrusko •
                    Alexander Commodore <br/>
                    Paul Emmert •
                    Sean Lewis •
                    Amanda Weirich
                </p>
                </div>
                <div style={{textAlign: "center"}} className="col-4">
                <div className = "followUs"><h5>Follow US</h5></div>
                <div className = "footer-section social-links">
                 <ul className="mediaFooter ul_horizontal ">
                    <li>
                        <a href="https://twitter.com" >
                            <img className="footer-img" src="images/Twitter favicon.png" alt="fav"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com" >                       
                            <img className="footer-img" src="images/Youtube favicon.png" alt="fav"/>                   
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" >                       
                            <img className="footer-img" src="images/IG favicon.png" alt="fav"/>                       
                        </a>
                    </li>
                </ul>
            </div>
                </div>
                <div style={{textAlign: "center"}} className="col-4">
                <div className = "support">
                <h5 className = "h5-type">Support</h5>
                <p>1-800-EZEATS</p>
                <a style={{color: "goldenrod", fontSize: 16}} href =" "><em>support@easyeatstu.com</em></a>
                <p>12345 Buzz blvd 
                    City, State 22222
                    United States
                </p>
            </div>
                </div>
            </div>
        </div>

        <div className = "footer-copyright">&copy; 2021 Easy Eats TU | All Rights Reserved</div>
    </div>
    
    );
}

export default Footer;