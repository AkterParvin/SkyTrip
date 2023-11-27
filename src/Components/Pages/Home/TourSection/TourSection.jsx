/* eslint-disable no-unused-vars */
import { useState } from "react";
import useTours from "../../Shared/Hooks/useTours";
import Slider from "../Home/Slider/Slider";
import { Link, useLocation } from "react-router-dom";
import TourCard from "../Home/AllTours/TourCard";


const TourSection = () => {

    const [showAll, setShowAll] = useState(true);
    const [tours] = useTours(showAll);

    const location = useLocation();
    const [allTours, setAllTours] = useState(false);
    const displayTours = location.pathname === "/alltours" || allTours ? tours : tours.slice(0, 4);
    return (
        <>
            <div>
                <div className="  h-[80vh] w-full bg-no-repeat bg-opacity-60 bg-cover bg-fixed flex flex-col items-center justify-center pt-14 md:pt-16" style={{ backgroundImage: 'url(https://i.imgur.com/Utde2za.jpg)' }}>
                    <div className="w-[96%] md:w-[60%] lg:w-[40%] mx-auto">
                        <span className="mb-4 text-lg md:text-2xl font-semibold text-white text-center px-3">
                            <p>Choose From Our Wide Ranges of Tour Types</p>
                        </span>

                        <Slider />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl  mx-auto my-10 px-2">
                        {
                            displayTours.map(tour => <TourCard key={tour._id}
                                tour={tour}>

                            </TourCard>)
                        }
                    </div>

                </div>
                {
                    location.pathname === "/" && !allTours ?
                        (<div className="flex justify-center my-8">
                            <Link to='/alltours'>
                                <button href="#_" className="relative px-6 py-3 font-bold text-teal-900  rounded-xl group shadow-xl">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-sky-800 ease opacity-80 group-hover:translate-x-0 rounded-xl shadow-xl group-hover:translate-y-0"></span>
                                    <span className="absolute  inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-emerald-400 ease opacity-80 group-hover:translate-x-0
                shadow-xl group-hover:translate-y-0 mix-blend-screen">

                                    </span>
                                    <span className="relative">All Tours</span>
                                </button>


                            </Link>
                        </div>) :
                        (<div className="flex justify-center my-8"><Link to="/">
                            <button className="px-6 duration-300 py-2 bg-[#8dd9ca] text-gray-700 font-bold rounded-lg shadow-lg border border-sky-900 hover:text-white hover:bg-[#33b097]">Go Home</button>

                        </Link></div>)
                }


            </div>
        </>
    );
};

export default TourSection;