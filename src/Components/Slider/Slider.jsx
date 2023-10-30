import React from 'react';
import './slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// slider images
import sliderImg1 from "../../../assets/Carousel-Images/slide-1.jpg"
import sliderImg2 from "../../../assets/Carousel-Images/slide-2.jpg"

const Slider = () => {
    return (
       
            
     <div className="slider relative ">
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* slide 01 */}
        <SwiperSlide>
           <picture>
           <img src={sliderImg1} alt="Slider Image" />
           </picture>
           {/* slider description */}
           <div className="absolute top-44 right-56 slider-description">
            <h3 className='uppercase text-xl'>Totally Wireless High-Performance</h3>
            <h1 className='text-4xl font-semibold uppercase tracking-widest'>Select Headphones</h1>
            <h1 className='text-8xl font-bold'>30% Off</h1>
            {/* price and button for order */}
           <div>
           <h2 className='text-2xl mt-2 uppercase tracking-wide'>Starting At <span className='bg-[#1abc9c] text-white p-2 rounded-lg'>$159</span></h2>
           <button className='btn btn-outline mt-4 hover:bg-[#1abc9c] border-0 border-b-2'>Buy Now</button>
           </div>
           </div>
        </SwiperSlide>
        {/* slide 02 */}
        <SwiperSlide>
            <picture>
            <img src={sliderImg2} alt="Slider Image" />
            </picture>
            {/* slider description */}
           <div className="absolute top-44 left-40 slider-description text-start">
            <h3 className='uppercase text-2xl tracking-wide '>Extra</h3>
            <h1 className='text-7xl font-semibold uppercase '>20% Off</h1>
            <h2 className='text-5xl font-bold text-start uppercase'>- Accessories -</h2>
            <h1 className='text-4xl uppercase tracking-widest mt-2'><span className='bg-[#1abc9c] text-white p-1 rounded-md'>Drones</span> On Sale</h1>
            <button className='btn btn-outline mt-5 hover:bg-[#1abc9c]'>Shop All Sale</button>
           </div>
        </SwiperSlide>
        
      </Swiper>
     </div>

     
    
        
    );
};

export default Slider;