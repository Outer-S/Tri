import React from 'react';
import holder from '../resources/icon_next.png';
import icon_fb from '../resources/icon_FB.png';
import icon_ig from '../resources/icon_IG.png';
import icon_youtube from '../resources/icon_YOUTUBE.png';
import icon_twitter from '../resources/icon_TWITTER.png';
import icon_linkedin from '../resources/icon_LINKEDIN.png';

export default function Footer() {
    return (
        <div className="footer" > 
            <div className="info">
                <div className="About-Tri">
                    <h2>ABOUT Tri</h2>
                    <ul>
                        <li><a href="/">What is Tri ?</a></li>
                        <li><a href="/">How Does Tri Work ? </a></li>
                        <li><a href="/">Who is it for ?</a></li>
                    </ul>
                </div>
                <div className="About-Tri">
                    <h2>MY ACCOUNT</h2>
                    <ul>
                        <li><a href="/">Account Creation</a></li>
                        <li><a href="/">Your Informations </a></li>
                        <li><a href="/">Your Services</a></li>
                        <li><a href="/">Your Products</a></li>
                    </ul>
                </div>
                <div className="About-Tri">
                    <h2>FAQ & HELP</h2>
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
                    <h1>SIGN IN TO OUR NEWSLETTER</h1>
                    <input id="email" type="email" name="email"  placeholder="exemple@stuff.com" />
                    <input id="submit" type="submit" value="SIGN IN" />

                </form>
            </div>
            <div className="Social-Media">
                <ul id="social">
                    <li><img src={icon_fb} alt="Instagram" /></li>
                    <li><img src={icon_ig} alt="Facebook" /></li>
                    <li><img src={icon_youtube} alt="Twitter" /></li>
                    <li><img src={icon_twitter} alt="Pinterest" /></li>
                    <li><img src={icon_linkedin} alt="Youtube" /></li>
                </ul>

            </div>
            <div className="Copyright">
                <h1><strong>COPYRIGHT ©</strong>  2020 <a id = "tri_link" href = "/">TRI</a>. ALL RIGHTS RESERVED<span><a href="/"> TERMS OF USE</a></span><span> | </span><span><a href="/">PRIVACY POLICY</a> </span> </h1>
            </div>
        </div>
    )
}
