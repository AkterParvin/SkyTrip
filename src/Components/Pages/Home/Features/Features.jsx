

const Features = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 pb-10 md:pb-14 lg:pb-20">
                <div className="container px-6 py-10 mx-auto">
                    <p className="text-lg font-serif italic text-[#E8604C] text-center mb-2 ">Why Choose Us</p>
                    <h1 className="text-2xl font-semibold text-center tracking-normal leading-10 text-gray-700  capitalize lg:text-3xl dark:text-white">Explore Our <br /> Offered <span className="text-[#E8604C]">Features</span></h1>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                        <div className="flex flex-col hover:animate-pulse  items-center p-6 space-y-3 text-center bg-zinc-100 rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 hover:animate-spin bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                <img src="https://i.imgur.com/wIZtiX3.png" alt="" />
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Best Price Granted</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>

                            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <span className="mx-1">read more</span>
                                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>

                        <div className="flex flex-col hover:animate-pulse   items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3  text-blue-500 hover:animate-spin bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                <img src="https://i.imgur.com/BVDHshd.png" alt="" />
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Best Travel Guide</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>

                            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <span className="mx-1">read more</span>
                                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>

                        <div className="flex flex-col hover:animate-pulse   items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 hover:animate-spin  bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                <img src="https://i.imgur.com/7jkHWgn.png" alt="" />
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Customer Care 24/7</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>

                            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <span className="mx-1">read more</span>
                                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
           
        </div>
    );
};

export default Features;