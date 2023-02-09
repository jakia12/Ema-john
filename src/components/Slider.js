import React,{useState,useRef,useEffect} from 'react';
import  {SliderImg } from './SliderData';
import { SliderDot } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Slider.css';


const Slider = ({slides,dots}) => {

  const [current,setCurrent] = useState(0);

  const length1 = slides.length;

  const nextSlide = () => {
    setCurrent(current === length1 - 1? 0 : current + 1);

   
  };

  return (
    <section className="slider-area"> 
        <div className="wrapper"> 
           <div className="row"> 
           <div className="col-6">

            
            <div className="slider">
                {SliderImg.map((slidImg,index) => (
                  <div className="slids"
                   key={index} 
                   style={{ transform: (current + 1) ? `translateX(${100 * (index - current)}%) ` : (current - 1) ? `translateX(${100 * (index - current)}%)`:0
                  }}
                   >
                  <img src={slidImg.image} alt="" />
                </div>
                ))}

                  <button className='btn-nav btn-prev'>prev</button>
                  <button className='btn-nav btn-next' onClick={ nextSlide} >next</button>
                
            
            </div>

            </div>
            <div className="col-6">
              <div className="dots">

                {SliderDot.map((bg,index) => (
                  <> 
                    <div
                   className="dot"
                   style={{backgroundColor:bg}}
                   onClick={() => setCurrent(index)}
                   >

                  </div>
                  
                  </>
                ))}
                <button className="reset" onClick={() => console.log('clicked')}> Reset</button>
              </div>
            </div>
            
           
           </div>
        </div>
    </section>
  )
}

export default Slider
