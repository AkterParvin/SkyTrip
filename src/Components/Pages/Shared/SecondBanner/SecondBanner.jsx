import { Swiper, SwiperSlide } from 'swiper/react';
// import bg1 from '../../../assets/slider1 (1).jpg';
// import bg2 from "../../../assets/1.png";
// import bg3 from '../../../assets/2.png';
// import bg4 from '../../../assets/3.png';
// import bg5 from '../../../assets/4.png';
// import bg6 from '../../../assets/5.png';
// import bg7 from '../../../assets/5.png';
// import bg8 from '../../../assets/5.png';
// import bg9 from '../../../assets/5.png';
// import bg10 from '../../../assets/5.png';
// import bg11 from '../../../assets/5.png';
// import bg12 from '../../../assets/5.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
// import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
const SecondBanner = () => {
    return (
        <div className=''>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                speed={800}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,

                }}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div className='h-[50vh] w-full flex justify-center gap-4 items-center'>
                        <img src='bg2.jpg' className='h-full w-1/3' />
                        <img src='bg7.jpg' className='h-full w-1/3' />
                        <img src='bg8.jpg' className='h-full w-1/3' />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[50vh] w-full flex justify-center gap-4 items-center'>
                        <img src='bg9.jpg' className='h-full w-1/3' />
                        <img src='bg10.jpg' className='h-full w-1/3' />
                        <img src='bg11.jpg' className='h-full w-1/3' />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[50vh] w-full flex justify-center gap-4 items-center '>
                        <img src='bg12.jpg' className='h-full w-1/3' />
                        <img src='bg13.jpg' className='h-full w-1/3' />
                        <img src='bg14.jpg' className='h-full w-1/3 ' />
                       
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[50vh] w-full flex justify-center gap-4 items-center '>
                        <img src='bg15.jpg' className='h-full w-1/3' />
                        <img src='bg16.jpg' className='h-full w-1/3' />
                        <img src='bg17.jpg' className='h-full w-1/3 ' />
                       
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SecondBanner;
