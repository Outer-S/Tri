import React from 'react';
import Logo from '../resources/Logo.png'
import Background from '../resources/background.jpg'
import login_icon from '../resources/login_icon.png'
import search_icon from '../resources/search_icon.png'



export class NavigationBar extends React.Component
{
    constructor (props)
    {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.state={
            login:false,
            display:'none'
        }
    }


    handleLogin()
    {
        const x= this.state.login;
        x ? this.setState({login:false,display:'Block'}) : this.setState({login:true,display:'none'});
    }

    render ()
    {
        return (
        <div className = "Home">  
            
            <div className = "Navigation">

                <div className = "Logo">
                <a href = "/home"><img className = "imgLogo" src = {Logo} alt = "imgLogo"/></a>
                </div>

                
                <div className = "Login">
                    <img className = "imgLogin" src = {login_icon} alt = "login" onClick = {this.handleLogin}/>
                    <div  className= "userLogin" style={{display:`${this.state.display}`}}>
                    
                    <h1>LOG IN</h1>
                    <form action = "">
                        <label for = "username">Email</label>
                        <input type = "text" name = "username" placeholder = "exemple@stuff.com"/><br></br>

                        <label for = "password">Password</label>
                        <input type = "password" name = "password" placeholder = "Password"/><br></br>

                        <h4 className = "forgot"><a href = "/">Forgot your password?</a></h4>


                        <div className = "Remember">
                        <input id = "remember" type="checkbox" value="remember"/>
                        <label id = "font_remember" for="remember">Remember me</label><br></br>
                        </div>

                        <input id="Submit" type = "submit" value = "LOGIN"/><br></br>

                        <h4>You don't have an account? <a href = "/"> SIGN IN</a></h4>
                    </form>
                    </div>
                </div>

            </div>

            <div className = "Main">
            <img className = "imgBackground" src = {Background} alt = "Background"/>


                <div className="Recherch">
                    <ul>
                        <li>I AM LOOKING FOR</li>
                        <li>CATEGORIES</li>
                        <li>LOCATIONS</li>
                        <div id='Rech-img'><img src={search_icon} alt="search" /></div>
                    </ul>
                </div>
                
                
                <div className="Slogan">
                <h1><span id='First'>Find <span id='coloring'>Whatever</span></span> <span id='Second'>You need </span> </h1>
                <h2>A BRIDGE BETWEEN <span>YOU</span> AND WHAT <span>YOU WANT</span></h2>
                </div>

                
            </div>
        </div>)
    }
}

export default NavigationBar