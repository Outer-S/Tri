import React from 'react';
import holder from '../resources/icon_next.png';

export default function Footer() {
    return (
        <div className="footer" > 
            <div className="info">
                <div className="About-Tri">
                    <h2>About Tri</h2>
                    <ul>
                        <li><a href="/">What is Tri ?</a></li>
                        <li><a href="/">How Does Tri Work ? </a></li>
                        <li><a href="/">Who is it for ?</a></li>
                    </ul>
                </div>
                <div className="About-Tri">
                    <h2>My Account</h2>
                    <ul>
                        <li><a href="/">Account Creation</a></li>
                        <li><a href="/">Your Informations </a></li>
                        <li><a href="/">Your Services</a></li>
                        <li><a href="/">Your Products</a></li>
                    </ul>
                </div>
                <div className="About-Tri">
                    <h2>FAQ & Help</h2>
                    <ul>
                        <li><a href="/">Online Ordering</a></li>
                        <li><a href="/">Follow your Order </a></li>
                        <li><a href="/">Customer Service</a></li>
                        <li><a href="/">After Selling Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="Email-Subscribtion">
                <form action="">
                    <label for="email">Sign in To Tri Emails</label>
                    <input id="email" type="email" name="email"  placeholder="Email" />
                    <input id="submit" type="submit" value="Submit" />

                </form>
            </div>
            <div className="Social-Media">
                <ul id="social">
                    <li><img src={holder} alt="Instagram" /></li>
                    <li><img src={holder} alt="Facebook" /></li>
                    <li><img src={holder} alt="Twitter" /></li>
                    <li><img src={holder} alt="Pinterest" /></li>
                    <li><img src={holder} alt="Youtube" /></li>
                </ul>

            </div>
            <div className="Copyright">
                <h1>Copyright c 2020 Tri Morocco inc:All rights reserved <span><a href="/">Terms of Use</a></span> | <span><a href="/">Privacy Policy</a> </span> </h1>
                <h2> 06XXXXXXX | Casabalanca , Casabalanca-Settat , 20490 </h2>
            </div>
        </div>
    )
}
