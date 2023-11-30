
import { Box, Container, Grid, Typography } from '@mui/material';
import Sticky from './Sticky';
import logoImage from "/logo.png"
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    const styles = {
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyright: {
    fontSize: '14px',
  },
  links: {
    display: 'flex',
    '& a': {
      margin: '0 10px',
      textDecoration: 'none',
      color: '#000',
      fontSize: '14px',
    },
  },
  footerLogo: {
    display: 'inline-block',
    float: 'left',
    marginRight: '20px',
    width:'45px'
  },
};


    return (
        <>
            <Container>
                <Grid container spcing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3} sx={{backgroundColor:"transparent",color: "white"}}>
                        
                        <Typography variant="h4" sx={{ margin: "15px", color: "white",paddingTop:"20px"}}>
                            <img src={logoImage} alt="SkyTrip Logo" style={styles.footerLogo} /> SkyTrip 
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", fontSize: '30px', color: "white" }}>
                            {" "}
                            Branding 
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                            Design
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                            Marketing
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                            Tourist Spots
                        </Typography>
                       
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Typography variant="h4" sx={{ margin: "15px", fontSize: '30px', paddingTop: "90px", color: "white" }}>
                            Contact Us 
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                            
                            <Box sx={{ display: "flex", justifyContent: "start" ,gap:"10px"}}>
                                <FaFacebook size={"30px"} color="#258fdb" />
                                <FaLinkedin size={"30px"} color="#65fafc" /> 
                                <FaTwitter size={"30px"} color="#0841a3" backgroundColor="#ffff"/>
                            </Box>
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                            Jobs
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                            Advertisement
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                            Features
                        </Typography>
                      
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Typography variant="h3" sx={{ margin: "15px", fontSize: '30px', paddingTop: "90px", color: "white" }}>
                           Explore
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                            Enterprise
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                           Security 
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                            Pricing
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                            Press Kit
                        </Typography>
                       
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Typography variant="h4" sx={{ margin: "15px", fontSize: '30px', paddingTop: "90px",color:"white" }}>
                            Social Media
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                            Guide Hire
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                            Terms of use
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                         Privacy Policy
                        </Typography>
                        <Typography variant="h6" sx={{ margin: "15px", color: "#fad3c3", fontSize: '16px' }}>
                            {" "}
                            Cookie Policy
                        </Typography>
                        
                    </Grid>
                </Grid>
                <Sticky/>
            </Container>
            
        </>
    )
};

export default Footer;
/*
import { Swiper, SwiperSlide } from 'swiper/react';
// import img1 from '../../../assets/slider1 (1).jpg';
// import img2 from "../../../assets/1.png";
// import img3 from '../../../assets/2.png';
// import img4 from '../../../assets/3.png';
// import img5 from '../../../assets/4.png';
// import img6 from '../../../assets/5.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
// import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
const Slider = () => {
    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                speed={800}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,

                }}
                effect={'fade'}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative h-full w-full '>
                        <img src='https://i.imgur.com/SBk642B.jpg' />
                        <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                            <div className='space-y-7 pt-9 md:pt-[15%] px-6 md:px-16  lg:w-1/2 text-left'>
                                <h2 className='text-2xl md:text-6xl  font-bold text-white '>Clean and <span className='text-teal-400'>Healthy</span></h2>
                                <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                                    <button className='btn  btn-outline md: text-white my-2 hover:bg-[#cdfcf3] hover:text-teal-700 font-bold'>Discover More</button>

                                </div>

                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full '>
                        <img src='https://i.imgur.com/nmo1XN3.jpg' />
                        <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                            <div className='space-y-7 pt-9 md:pt-[15%] px-6 md:px-16  lg:w-1/2 text-left'>
                                <h2 className='text-2xl md:text-6xl  font-bold text-white '>Give Your Home  <span className='text-teal-400'>a Fresh Start</span></h2>
                                <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                                    <button className='btn  btn-outline md: text-white my-2 hover:bg-[#cdfcf3] hover:text-teal-700 font-bold'>Discover More</button>

                                </div>

                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full '>
                        <img src='https://i.imgur.com/r2ZJDVs.jpg' />
                        <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                            <div className='space-y-7 pt-9 md:pt-[15%] px-6 md:px-16  lg:w-1/2 text-left'>
                                <h2 className='text-2xl md:text-6xl  font-bold text-white '>The Pristine <span className='text-teal-400'>Professionals</span></h2>
                                <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                                    <button className='btn  btn-outline md: text-white my-2 hover:bg-[#cdfcf3] hover:text-teal-700 font-bold'>Discover More</button>

                                </div>

                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full '>
                        <img src='https://i.imgur.com/DhdMD5q.jpg' />
                        <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                            <div className='space-y-7 pt-9 md:pt-[15%] px-6 md:px-16  lg:w-1/2 text-left'>
                                <h2 className='text-2xl md:text-6xl  font-bold text-white '>Clean Home,  <span className='text-teal-400'>Happy Life</span></h2>
                                <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                                    <button className='btn  btn-outline md: text-white my-2 hover:bg-[#cdfcf3] hover:text-teal-700 font-bold'>Discover More</button>

                                </div>

                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full '>
                        <img src='https://i.imgur.com/7u0Uwtn.jpg' />
                        <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                            <div className='space-y-7 pt-9 md:pt-[15%] px-6 md:px-16  lg:w-1/2 text-left'>
                                <h2 className='text-2xl md:text-6xl  font-bold text-white '>Making Your  <span className='text-teal-400'>Space Sparkle</span></h2>
                                <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                                    <button className='btn  btn-outline md: text-white my-2 hover:bg-[#cdfcf3] hover:text-teal-700 font-bold'>Discover More</button>

                                </div>

                            </div>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full '>
                        <img src='https://i.imgur.com/xsPHkZ3.jpg' />
                        <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                            <div className='space-y-7 pt-9 md:pt-[15%] px-6 md:px-16  lg:w-1/2 text-left'>
                                <h2 className='text-2xl md:text-6xl  font-bold text-white '>Get the Job  <span className='text-teal-400'>Done Right</span></h2>
                                <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                                    <button className='btn  btn-outline md: text-white my-2 hover:bg-[#cdfcf3] hover:text-teal-700 font-bold'>Discover More</button>

                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>




            </Swiper>


        </div>
    );
};

export default Slider;





*/