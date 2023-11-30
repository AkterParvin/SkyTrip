import { Helmet } from "react-helmet-async";
import { FaCheck, FaStar, FaStopwatch, FaUser } from "react-icons/fa";
import Testimonial from "../Home/Testimonial/Testimonial";
import { useLoaderData } from "react-router-dom";


const BLogDetail = () => {
    const blog = useLoaderData();
    const { tourist_name, tourist_email, price, detail, guide_name, type, date, storyImage, _id
    } = blog;
    return (
        <>
            <Helmet>
                <title>SkyTrip | Blog Details</title>
            </Helmet>
            <div>
                <div className=" w-full mx-auto flex flex-col md:flex-row justify-between items-start gap-5 mb-4 pl-10 pt-6 md:pt-12">
                    <div >
                        <h2 className="text-xl md:text-3xl font-bold text-gray-700 ">Rejuvenate Your Spirit in the Wilderness</h2>
                        <span className="flex items-center gap-2 text-[#E8604C] my-3">
                            <FaStar size={"24px"} />
                            <FaStar size={"24px"} />
                            <FaStar size={"24px"} />
                            <FaStar size={"24px"} />
                            <p className="text-gray-700 text-base ">Reviews</p>
                        </span>
                        <span className="flex items-start justify-start gap-1">
                            <p className="text-base  text-gray-700 font-bold"> Guide Name :</p>
                            <p className="text-base text-[#E8604C] font-bold">{guide_name}</p>
                        </span>
                    </div>
                    <div >
                        <h2 className="text-xl md:text-4xl font-bold text-gray-700 ">${price}</h2>
                        <p className="text-gray-700 text-base text-center"> per person</p>


                    </div>

                </div>
                <div className="divider divider-info font-serif italic font-thin text-[#E8604C]">Enjoy Your Trip</div>
                <div className="grid grid-cols-8 gap-5">
                    <div className="h-full w-full mx-auto shadow-xl col-span-5 pl-10 bg-gray-100 ">
                        <div className="py-5">
                            {/* headlines  */}
                            <div>
                                <h2 className="text-base w-[90%] font-bold text-gray-900 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus ratione asperiores odit esse maxime.</h2>
                                <p className="text-sm mb-5 w-[80%]">{ detail}</p>
                                <span className="flex items-start justify-start gap-1">
                                    <p className="text-base mb-5 text-gray-700 font-bold"> Spot Name :</p>
                                    <p className="text-base mb-5 text-[#E8604C] font-bold">Hawaie Island</p>
                                </span>
                                <span className="flex items-start justify-start gap-1">
                                    <p className="text-base mb-5 text-gray-700 font-bold"> Tour Type :</p>
                                    <p className="text-base mb-5 text-[#E8604C] font-bold uppercase">{type}</p>
                                </span>
                            </div>

                            {/* info  */}
                            <div className="flex justify-start items-center">
                                <span className="flex justify-center items-center gap-1 border-r-2 border-[#E8604C] pr-6">
                                    <FaStopwatch />
                                    {date}
                                </span>
                                <span className="flex justify-center items-center gap-1 pr-6 pl-2 border-r-2 border-[#E8604C]">
                                    <FaUser/>
                                    <p className="text-gray-700">Max People: {""}</p>
                                </span>
                                <span className="flex justify-center items-center gap-1 pl-2" >
                                    <FaStopwatch />
                                    <p className="text-gray-700">{""}Days</p>

                                </span>


                            </div>
                            {/* Divider  */}
                            <div className="divider  font-serif italic font-thin text-[#E8604C]"></div>
                            {/* include  */}
                            <div className="flex items-start justify-between my-10 w-[95%]">
                                <span className="w-1/3">
                                    <h2 className="text-base text-gray-700 font-semibold">Price Includes</h2>
                                </span>
                                <span className=" w-[66%] flex justify-start items-start gap-5">
                                    <span className="flex flex-col items-start justify-start">
                                        <p className="flex justify-center items-center text-sm">
                                            <FaCheck className="text-[#E8604C] mr-1 text-sm font-thin" /> 3 Nights Accommodation
                                        </p>
                                        <p className="flex justify-center items-center  text-sm">
                                            <FaCheck className="text-[#E8604C] mr-1 text-sm font-thin" /> 2 Meals / day
                                        </p>
                                        <p className="flex justify-center items-center  text-sm"><FaCheck className="text-[#E8604C] mr-1 text-sm font-thin" /> On Trip Transport
                                        </p>
                                    </span>
                                    <span className="flex flex-col items-start justify-start">
                                        <p className="flex justify-center items-center  text-sm"><FaCheck className="text-[#E8604C] mr-1 text-sm font-thin" /> Airport Transfers
                                        </p>
                                        <p className="flex justify-center items-center  text-sm">
                                            <FaCheck className="text-[#E8604C] mr-1 text-sm font-thin" />
                                            Box Lunch, Dinner & Snacks.
                                        </p>
                                    </span>
                                </span>
                            </div>
                            {/* Divider  */}
                            <div className="divider  font-serif italic font-thin text-[#E8604C]"></div>
                            {/* exclude  */}
                            <div className="flex items-start justify-between my-10 w-[95%]">
                                <span className="w-1/3">
                                    <h2 className="text-base text-gray-700 font-semibold">Price Excludes</h2>
                                </span>
                                <span className=" w-[66%] flex justify-start items-start gap-5">
                                    <span className="flex flex-col items-start justify-start ">
                                        <p className="flex justify-center items-center text-sm">
                                            <FaCheck className="text-[#E8604C] mr-1 text-sm font-thin" /> Departure Taxes
                                        </p>
                                        <p className="flex justify-center items-center  text-sm">
                                            <FaCheck className="text-[#E8604C] mr-1 text-sm font-thin" /> Entry Fees
                                        </p>

                                    </span>
                                    <span className="flex flex-col items-start justify-end ml-14">
                                        <p className="flex justify-center items-center  text-sm"><FaCheck className="text-[#E8604C] mr-1 text-sm font-thin" /> Mid Meals
                                        </p>
                                        <p className="flex justify-center items-center  text-sm">
                                            <FaCheck className="text-[#E8604C] mr-1 text-sm font-thin" />
                                            Any Amusement Ride Fee
                                        </p>
                                    </span>
                                </span>
                            </div>
                            {/* Divider  */}
                            <div className="divider  font-serif italic font-thin text-[#E8604C]"></div>
                            {/* Some Photo  */}
                            <div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900 mb-5 w-[80%]">Some Photos</h1>
                                    <p className="text-sm mb-5 w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam error adipisci molestias, blanditiis magnam unde deleniti laboriosam consequatur, quo maxime consectetur impedit distinctio maiores. Veritatis, voluptate incidunt tempore eum corporis nisi doloremque voluptatibus animi!</p>
                                </div>
                                <div className="flex items-center justify-start gap-3 
                                w-full h-auto overflow-hidden my-5 shadow-xl">
                                    <img src={storyImage} alt="" className="h-52 w-[32%] object-cover" />
                                    <img src={'https://i.imgur.com/GALwp0L.jpg'} alt="" className="h-52 w-[32%] object-cover" />
                                    <img src={"https://i.imgur.com/rdkJGYx.jpg"} alt="" className="h-52 w-[32%] object-cover" />
                                </div>
                            </div>
                        </div>
                        {/* Tour Plan Section  */}
                        <div className="container flex flex-col justify-center  py-5 mx-auto ">
                            <h2 className="text-2xl font-semibold sm:text-4xl ">Tour Plan</h2>
                            <p className="my-3 dark:text-gray-400 ">Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas lacus tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.</p>
                            <div>
                                
                            </div>
                        </div>

                        {/* Faq Section  */}
                        <section className="dark:bg-gray-800 dark:text-gray-100">
                            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                                <h2 className="text-2xl font-semibold sm:text-4xl">Some FAQ This Place</h2>
                                <p className="mt-4 mb-8 dark:text-gray-400">Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas lacus tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.</p>
                                <div className="space-y-4">
                                    <details className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What are the best locations for wedding tour?</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Some of the strangest places on earth are also the most sublime: from the UFO-like dragon&#39;s blood trees in Yemen to a rainbow-colored hot spring in Yellowstone to a bridge in Germany that looks like a leftover prop from Lord of the Rings. </p>
                                    </details>
                                    <details className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What are the most surreal place to visit?</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Some of the strangest places on earth are also the most sublime: from the UFO-like dragon&#39;s blood trees in Yemen to a rainbow-colored hot spring in Yellowstone to a bridge in Germany that looks like a leftover prop from Lord of the Rings. </p>
                                    </details>
                                    <details className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What is the most popular family vacation location in Bangladesh?</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Some of the strangest places on earth are also the most sublime: from the UFO-like dragon&#39;s blood trees in Yemen to a rainbow-colored hot spring in Yellowstone to a bridge in Germany that looks like a leftover prop from Lord of the Rings. </p>
                                    </details>
                                </div>
                            </div>
                        </section>
                        {/* Gallery Section  */}
                        <div className="container flex flex-col justify-center  py-5 mx-auto ">
                            <h2 className="text-2xl font-semibold sm:text-4xl ">Gallery</h2>
                            <p className="my-3 dark:text-gray-400 ">Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas lacus tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.</p>
                            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                                    <img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
                                    <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                                </div>
                            </section>
                        </div>
                        {/* Textimonial  */}
                        <div>
                            <span>
                                <h2 className="text-2xl font-semibold sm:text-4xl ">Tesimonials</h2>
                                <p className="my-3 dark:text-gray-400 ">Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas lacus tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.</p>
                            </span>
                            <Testimonial />

                        </div>


                    </div>
                    <div className="h-full w-full mx-auto bg-blue-100 col-span-3 pl-10">

                        {/* <div>
                            <BookingForm tourDetails={tourDetails} />
                        </div> */}
                    </div>
                </div>


                {/* all page common section  */}
                <div>
                    <section className="py-6 dark:bg-gray-800">
                        <div className="container flex flex-col justify-center  mx-auto">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default BLogDetail;