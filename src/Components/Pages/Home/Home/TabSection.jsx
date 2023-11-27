import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OverView from '../OverView/OverView';
import TourSection from '../TourSection/TourSection';
import OurGuides from '../OurGuides/OurGuides';
// import { Link } from 'react-router-dom';

const TabSection = () => {
    // const tabTitle = ["Overview", "Packages", "Tour Guides"];
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabIndex = (index) => {
        setTabIndex(index);
    }
    return (
        <div className='bg-gradient-to-t from-[#faf2ef] via-gray-200 to-red-100'>
            <div className="flex  flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
                <div className="flex flex-col items-center max-w-2xl md:px-8">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#E8604C] italic font-serif uppercase rounded-full bg-teal-accent-400">
                                Explore with SkyTrip
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="#E8604C"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Find</span>
                            </span>{' '}
                           Your Dream Destination With Us
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p>
                    </div>
                </div>
            </div>  
            <div className="max-w-6xl mx-auto my-10 bg-gray-100  py-8">
                <Tabs selectedIndex={tabIndex} onSelect={handleTabIndex}>
                    <TabList className='text-[#E8604C] border border-red-950 flex items-center justify-center '>
                        <Tab>
                            <a  className="relative inline-flex items-center justify-start py-1 px-2 overflow-hidden font-semibold text-[#E8604C] transition-all duration-150 ease-in-out rounded hover:pl-2 hover:pr-2 bg-gray-50 group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#E8604C] group-hover:h-full">

                                </span>
                                

                                <span className="relative w-full  text-xs md:text-base transition-colors duration-200 ease-in-out group-hover:text-white">
                                    Overview
                                </span>
                            </a>
                        </Tab>
                        <Tab>
                        <a  className="relative inline-flex items-center justify-start py-1 px-2 overflow-hidden font-semibold text-[#E8604C] transition-all duration-150 ease-in-out rounded hover:px-2 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#E8604C] group-hover:h-full">    
                            </span>
                                <span className="relative w-full  text-xs md:text-base transition-colors duration-200 ease-in-out group-hover:text-white">
                                    Our Packages
                            </span>
                        </a>
                            
                        </Tab>
                        <Tab>
                            <a  className="relative inline-flex items-center justify-start py-1 px-2 overflow-hidden font-semibold text-[#E8604C] transition-all duration-150 ease-in-out rounded hover:pl-2 hover:pr-2 bg-gray-50 group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#E8604C] group-hover:h-full">
                                </span>
                                <span className="relative w-full text-xs md:text-base transition-colors duration-200 ease-in-out group-hover:text-white">
                                 Guides
                                </span>
                            </a>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <OverView></OverView>
                    </TabPanel>

                    <TabPanel>
                        <TourSection></TourSection>
                    </TabPanel>

                    <TabPanel>
                        <OurGuides></OurGuides>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default TabSection;