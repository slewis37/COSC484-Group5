import React from 'react';
//import './App.css';
import image from "./test1.jpg";


class Login extends React.Component {
    render() {
        return ( <
            body style = {
                { backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: 800, width: 1500 }
            } >
            <
            div style = {
                { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh', className: "Login" }
            } >
            <
            h1 style = {
                { color: "yellow", backgroundColor: "black", alignSelf: "flex-start" }
            } > EasyEatsTu < /h1> < /
            div > <
            div style = {
                { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh' }
            } >
            <
            h1 style = {
                { color: "yellow", backgroundColor: "black", alignSelf: "flex-start" }
            } > Login to Your Account < /h1> < /
            div > <
            div style = {
                { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh' }
            } >
            <
            h2 style = {
                { color: "yellow", backgroundColor: "black", alignSelf: "flex-start" }
            } > Username < /h2> < /
            div > <
            div style = {
                { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '0vh' }
            } >
            <
            input type = "text"
            name = "username" / >
            <
            /div> <
            div style = {
                { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh' }
            } >
            <
            h2 style = {
                { color: "yellow", backgroundColor: "black", alignSelf: "flex-start" }
            } > Password < /h2> < /
            div > <
            div style = {
                { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '0vh' }
            } >
            <
            input type = "text"
            name = "password" / >
            <
            /div> <
            div style = {
                { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh' }
            } >
            <
            input type = "submit"
            name = "submit" / >
            <
            /div> <
            div style = {
                { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '0vh' }
            } >
            <
            h4 style = {
                { color: "red", backgroundColor: "black" }
            } > New to EasyEatsTu ? Sign Up Here! < /h4> <
            input type = "checkbox"
            name = "new" / >
            <
            /div> < /
            body >
        );
    }
}

export default Login;