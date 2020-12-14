import React from 'react';
import Logo from '../resources/background.jpg';

export default function Discover() {
    return (
        <div className="Discover">
            <h1>Discover Our Services and Products <span><a href="/">Learn more</a></span> </h1>
            
            <ul>
                <li>
                    <img src={Logo} alt=""/>
                    <p>Ships to Your Address </p>
                </li>
                <li>
                    <img src={Logo} alt=""/>
                    <p>Secure Payment</p>
                </li>
                <li>
                    <img src={Logo} alt=""/>
                    <p>Customer Service</p>
                </li>
                <li>
                    <img src={Logo} alt=""/>
                    <p>Fair Pricing</p>
                </li>
                <li>
                    <img src={Logo} alt=""/>
                    <p>Secured Guarantee</p>
                </li>

            </ul>
        </div>
    )
}
