

const Parallax = () => {
    return (
        <div>
            <header className="bg-black text-white p-8 flex justify-between items-center z-10">
                <h2 className="text-2xl font-bold">Logo</h2>
                <nav className="navigation">
                    <a href="#" className="relative font-semibold text-lg hover:text-gray-800 transition duration-500">
                        Home<span className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl scale-0 opacity-0 transition duration-500 hover:scale-100 hover:opacity-100"></span>
                    </a>
                    <a href="#" className="relative font-semibold text-lg hover:text-gray-800 transition duration-500">
                        About<span className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl scale-0 opacity-0 transition duration-500 hover:scale-100 hover:opacity-100"></span>
                    </a>
                    <a href="#" className="relative font-semibold text-lg hover:text-gray-800 transition duration-500">
                        Services<span className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl scale-0 opacity-0 transition duration-500 hover:scale-100 hover:opacity-100"></span>
                    </a>
                    <a href="#" className="relative font-semibold text-lg hover:text-gray-800 transition duration-500">
                        Contact<span className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl scale-0 opacity-0 transition duration-500 hover:scale-100 hover:opacity-100"></span>
                    </a>
                </nav>
            </header>

            <section className="parallax bg-cover bg-center relative flex justify-center items-center h-screen">
                <h2 id="text" className="absolute text-7xl text-gray-700">Parallax Website</h2>
                <img src="tree-left.png" id="tree-left" alt="" className="absolute" />
                <img src="tree-right.png" id="tree-right" alt="" className="absolute" />
                <img src="gate-left.png" id="gate-left" alt="" className="fixed -translate-x-72" />
                <img src="gate-right.png" id="gate-right" alt="" className="fixed translate-x-72" />
                <img src="grass.png" id="grass" alt="" className="absolute" />
            </section>

            <section className="sec bg-black text-white p-8">
                <h2 className="text-4xl font-bold text-center mb-4">Parallax Scrolling Website</h2>
                <p className="text-lg font-light text-justify">
               
                </p>
              
            </section>
        </div>
    );
};

export default Parallax;
