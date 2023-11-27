/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';
// import img1 from '../../../assets/slider1 (1).jpg';
// import img2 from "../../../assets/1.png";
// import img3 from '../../../assets/2.png';
// import img4 from '../../../assets/3.png';
// import img5 from '../../../assets/4.png';
// import img6 from '../../../assets/5.png';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
// import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import useTours from '../../../Shared/Hooks/useTours';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  
 
    return (
        <div className='w-full mx-auto  mb-16 bg-gray-100/20 rounded-xl px-3 md:px-6 shadow-xl'>
           

            <Swiper
                slidesPerView={3}
                aut
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                
                modules={[Pagination,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='h-28 bg-transparent py-12 uppercase'>
                    <Link to={'/tour/camping'}><button className='w-full py-8 md:py-12 rounded-full uppercase bg-[#fff1ec] font-semibold  text-xs md:text-base'>camping</button></Link>
                </SwiperSlide>
                <SwiperSlide className='h-28 bg-transparent py-12 '>
                    <Link to={'/tour/boatriding'}><button className='w-full py-8 md:py-12 rounded-full uppercase bg-[#fff1ec] font-semibold  text-xs md:text-base'>boatriding</button></Link>
                </SwiperSlide>
                <SwiperSlide className='h-28 bg-transparent py-12 uppercase'>
                    <Link to={'/tour/seabeach'}><button className='w-full py-8 md:py-12 rounded-full uppercase bg-[#fff1ec] font-semibold  text-xs md:text-base'>seabeach</button></Link>
                </SwiperSlide>
                <SwiperSlide className='h-28 bg-transparent py-12 uppercase'>
                    <Link to={'/tour/airrides'}><button className='w-full py-8 md:py-12 rounded-full uppercase bg-[#fff1ec] font-semibold  text-xs md:text-base'>airrides</button></Link>
                </SwiperSlide>
                <SwiperSlide className='h-28 bg-transparent py-12 uppercase'>
                    <Link to={'/tour/historical'}><button className='w-full py-8 md:py-12 rounded-full uppercase bg-[#fff1ec] font-semibold  text-xs md:text-base'>historical</button></Link>
                </SwiperSlide>
                <SwiperSlide className='h-28 bg-transparent py-12 uppercase'>
                    <Link to={'/tour/honeymoon'}><button className='w-full py-8 md:py-12 rounded-full uppercase bg-[#fff1ec] font-semibold  text-xs md:text-base'>honeymoon</button></Link>
                </SwiperSlide>
                <SwiperSlide className=' bg-transparent py-12 uppercase'>
                    <Link to={'/tour/wildlife'}><button className='w-full py-8 md:py-12 rounded-full uppercase bg-[#fff1ec] font-semibold  text-xs md:text-base'>wildlife</button></Link>
                </SwiperSlide>
                <SwiperSlide className='h-28 bg-transparent py-12 uppercase'>
                    <Link to={'/tour/hiking'}><button className='w-full py-8 md:py-12 rounded-full uppercase bg-[#fff1ec] font-semibold  text-xs md:text-base'>hiking</button>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='h-28 bg-transparent py-12 uppercase'>
                    <Link to={'/tour/sports'}><button className='w-full py-8 md:py-12 rounded-full uppercase bg-[#fff1ec] font-semibold  text-xs md:text-base'>sports</button>
                    </Link>
                </SwiperSlide>
                
                
            </Swiper>


        </div>
    );
};

export default Slider;

//  sports(4),hiking(5),wildlife(4),honeymoon(4),airrides(4),seabeach(4),camping(3),boatriding(4),historical(3)