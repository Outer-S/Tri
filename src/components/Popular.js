import React, {useState} from 'react';
import icon_previous from '../resources/icon_previous.png';
import icon_next from '../resources/icon_next.png';
import img_translation from '../resources/img_translation.jpg';
import img_seo from '../resources/img_seo.jpg';
import img_logodesign from '../resources/img_logodesign.jpg';
import img_socialmedia from '../resources/img_socialmedia.jpg';
import img_videoedit from '../resources/img_videoedit.jpg';
import img_illustration from '../resources/img_illustration.jpg';





export default function Popular() {
    const [x,setX]=useState(0); 
    const handleNext=()=>{
          
        x<150? setX(x+32): setX(0);
          
     }
     const handlePrev=()=>{
         
        x>0?setX(x-32):setX(95);
          
     } 
    return (
        <div className="popular">
           <h1 id='header'>Most Popular Services</h1>
           <div className="carousel" style={{transform:`translateX(${-x}vw)`}}>
                <div className='slide'>
                    <div className="slide-content">
                    <h1>Build your brand<span>LOGO DESIGN</span> </h1>
                    <img src={img_logodesign} alt="nothing" />
                    </div>
               </div>
               <div className='slide'>
                    <div className="slide-content">
                    <h1>Go global <span>TRANSLATION</span> </h1>
                    <img src={img_translation} alt="nothing" />
                    </div>
               </div>
               <div className='slide'>
                    <div className="slide-content">
                    <h1>Online growth <span>SEO</span> </h1>
                    <img src={img_seo} alt="nothing" />
                    </div>
               </div>
               <div className='slide'>
                    <div className="slide-content">
                    <h1>Reach more customers<span>SOCIAL MEDIA</span> </h1>
                    <img src={img_socialmedia} alt="nothing" />
                    </div>
               </div>
               <div className='slide'>
                    <div className="slide-content">
                    <h1>Better Videos <span>VIDEO EDITING</span> </h1>
                    <img src={img_videoedit} alt="nothing" />
                    </div>
               </div>
               <div className='slide'>
                    <div className="slide-content">
                    <h1>Color your ideas <span>Illustration</span> </h1>
                    <img src={img_illustration} alt="nothing" />
                    </div>
               </div>

           </div>
           <div className="Button-Slider" id="Next" onClick={handleNext} ><img src={icon_next} alt="next" /> </div>
           <div className="Button-Slider" id="Previous" onClick={handlePrev} ><img src={icon_previous} alt="previous" /></div>
            
        </div>
    )
}
