import React from 'react';
import secure_payement from '../resources/icon_secure_payement.png';
import customer_service from '../resources/icon_customer_service.png';
import track_order from '../resources/icon_track_order.png';
import icon_satisfaction from '../resources/icon_satisfaction.png';




export default function Discover() {
    return (
        <div className="Discover">
            <span><a href="/"><h1>DISCOVER OUR PRODUCTS AND SERVICES</h1></a></span>
            
            <ul>
                <li>
                    <img src={customer_service} alt=""/>
                    <p>CUSTOMER SERVICE</p>
                </li>
                <li>
                    <img src={secure_payement} alt=""/>
                    <p>SECURE PAYEMENT</p>
                </li>
                <li>
                    <img src={track_order} alt=""/>
                    <p>TRACK YOUR ORDER</p>
                </li>
                <li>
                    <img src={icon_satisfaction} alt=""/>
                    <p>100% SATISFACTION</p>
                </li>

            </ul>
        </div>
    )
}
