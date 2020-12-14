import React from 'react';
import Image from '../resources/background.jpg';


export default function Popular() {
    return (
        <div className="popular">
           <h1 id='header'>Most Popular Services</h1>
           <div className="carousel">
               <div className='slide'>
                    <div className="slide-content">
                    <h1>Service <span>Ingenieure</span> </h1>
                    <img src={Image} alt="nothing" />
                    </div>
               </div>
               <div className='slide'>
                    <div className="slide-content">
                    <h1>Service <span>Ingenieure</span> </h1>
                    <img src={Image} alt="nothing" />
                    </div>
               </div>
               <div className='slide'>
                    <div className="slide-content">
                    <h1>Service <span>Ingenieure</span> </h1>
                    <img src={Image} alt="nothing" />
                    </div>
               </div>
               <div className='slide'>
                    <div className="slide-content">
                    <h1>Service <span>Ingenieure</span> </h1>
                    <img src={Image} alt="nothing" />
                    </div>
               </div>
               <div className='slide'>
                    <div className="slide-content">
                    <h1>Service <span>Ingenieure</span> </h1>
                    <img src={Image} alt="nothing" />
                    </div>
               </div>
               <div className='slide'>
                    <div className="slide-content">
                    <h1>Service <span>Ingenieure</span> </h1>
                    <img src={Image} alt="nothing" />
                    </div>
               </div>
           </div>
        </div>
    )
}
