import React, {useState} from 'react';
import Image from '../resources/background.jpg';


export default function Popular() {
    const [x,setX]=useState(0); 
    const handleNext=()=>{
          if(x<0){
          setX(x+34);
          }else{
              setX(-50);
          }
     }
     const handlePrev=()=>{
          if(x>-50){
               setX(x-34);
           }else{
               setX(0);
          }
     } 
    return (
        <div className="popular">
           <h1 id='header'>Most Popular Services</h1>
           <div className="carousel" style={{transform:`translateX(${x}%)`}}>
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
           <div className="Button-Slider" id="Next" onClick={handleNext} ><img src="" alt="" /> </div>
           <div className="Button-Slider" id="Previous" onClick={handlePrev} ><img src="" alt="" / > </div>
        </div>
    )
}
