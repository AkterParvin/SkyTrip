/* eslint-disable no-unused-vars */
import Marquee from "react-fast-marquee";



const Banner = () => {
    return (
        <>
            {/* <div className="flex items-center justify-center h-[40vh]">
                <div className="h-full bg-red-500 w-1/2"></div>
                <div className="h-full bg-green-500 w-1/2"></div>
            </div> */}
   
            <div className="w-full h-full relative">
                <img
                    src="https://i.imgur.com/UQySICf.jpg"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-opacity-50 bg-fuchsia-200 ">
                    <svg
                        className="absolute inset-x-0 bottom-0 text-white"
                        viewBox="0 0 1180 162"
                    >
                        <path
                            fill="currentColor"
                            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                        />
                    </svg>
                    <div className="relative z-20 px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex z-50 flex-col items-center justify-between xl:flex-row">
                            <div className="w-full z-50 max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    The quick, brown fox <br className="hidden md:block" />
                                    jumps over a lazy dog
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                    quae.
                                </p>
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                                >
                                    Learn more
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-[40%]">
                                <div className="bg-white rounded shadow-xl p-7 sm:p-6">
                                   
                                   
                                   
                                    <div >
                                        <Marquee>
                                        <img src="https://i.ibb.co/6PxVtck/slider3.jpg" alt="" className=" mx-auto h-[100px] ml-2  shadow-xl shadow-slate-700" />
                                       <img src="https://i.imgur.com/hTnNVu2.jpg" alt="" className=" mx-auto h-[100px] ml-2  shadow-xl shadow-slate-700" />
                                        <img src="https://i.imgur.com/Utde2za.jpg" alt="" className=" mx-auto h-[100px] ml-2  shadow-xl shadow-slate-700" />
                                       <img src="https://i.imgur.com/pF8ig0B.jpg" alt="" className=" mx-auto h-[100px] ml-2  shadow-xl shadow-slate-700" />
                                     </Marquee>
                                    </div>
                                    <div className="my-4">
                                        <div className="max-w-md sm:mx-auto sm:text-center">
                                            <div className="flex items-center justify-center w-16 h-16 mb-2 rounded-full bg-[#DEF3F6] sm:mx-auto sm:w-12 sm:h-12">
                                                <svg
                                                    className="w-4 h-4 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                                                    stroke="currentColor"
                                                    viewBox="0 0 52 52"
                                                >
                                                    <polygon
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        fill="none"
                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                    />
                                                </svg>
                                            </div>
                                            <h6 className="mb-3 text-lg font-bold leading-5">Deep Ocean Calling</h6>
                                            <p className="mb-3 text-sm text-gray-900">
                                                A flower in my garden, a mystery in my breath We never had the chance to.
                                            </p>

                                        </div>
                                    </div>
                                    <div className="video-container">
                                        <div style={{ width: '100%', height: '0px', position: 'relative', paddingBottom: '56.250%' }}>
                                            <iframe
                                                title="Streamable Video"
                                                src="https://streamable.com/e/ooselo?autoplay=1"
                                                width="100%"
                                                height="100%"
                                                allowFullScreen
                                                allow="autoplay"
                                                style={{ width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px', overflow: 'hidden' }}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <div>
        //     <div className="flex flex-col md:flex-row">
        //         <div className="">
        //             <img src="https://i.imgur.com/GetjZ77.jpg" alt="" className="h-screen w-screen" />
        //         </div>
        //         <div className="w-[60%] lg:w-[45%] absolute top-[9%] left-[0%] ">
        //             <Marquee>
        //                 <img src="https://i.ibb.co/6PxVtck/slider3.jpg" alt="" className=" mx-auto h-[50vh] ml-2  shadow-xl shadow-slate-700" />
        //                 <img src="https://i.imgur.com/hTnNVu2.jpg" alt="" className=" mx-auto h-[50vh] ml-2  shadow-xl shadow-slate-700" />
        //                 <img src="https://i.imgur.com/Utde2za.jpg" alt="" className=" mx-auto h-[50vh] ml-2  shadow-xl shadow-slate-700" />
        //                 <img src="https://i.imgur.com/pF8ig0B.jpg" alt="" className=" mx-auto h-[50vh] ml-2  shadow-xl shadow-slate-700" />
        //             </Marquee>
        //             <h1 className="text-sm lg:text-2xl rounded-b-xl text-white bg-red-700/60 px-3 py-3">Your one-stop destination for hassle-free, expert guidance and a vast selection of vehicles to choose from!</h1>
        //         </div>
        //     </div> 
        // </div>
    );
};

export default Banner;