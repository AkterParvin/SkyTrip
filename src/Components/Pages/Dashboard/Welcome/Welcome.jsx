

const Welcome = () => {
    return (
        <div>
            <div className="max-w-5xl p-4 mx-auto mt-6 space-y-1 text-center">
               
                <h2 className="pb-3 text-3xl font-bold md:text-4xl text-blue-900">Welcome to Dashboard</h2>
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Similique dolore distinctio asperiores, eveniet cum natus veniam <br /> neque eum voluptas accusantium.</p>
            </div>
            <div className="p-5 mx-auto sm:p-10 md:p-12 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src="https://i.imgur.com/xpOZAqu.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl bg-[#17262f] sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl text-white font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
                            <p className="text-xs dark:text-gray-400 text-red-700">By
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
                            </p>
                        </div>
                        <div className="dark:text-gray-100 text-gray-100">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia eum quo ab et unde dolor obcaecati at. Officia, maxime ipsam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;