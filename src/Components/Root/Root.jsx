import { Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Nav/Nav";
import Banner from "../Pages/Home/Banner/Banner";


const Root = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <div className=" h-screen w-full bg-no-repeat bg-opacity-60 bg-cover bg-fixed flex items-center justify-center " style={{ backgroundImage: 'url(https://i.imgur.com/rPBDuas.jpg)' }}>

                <span className="flex flex-col items-center justify-center w-[70%] z-50">
                    <h2 className="text-white font-bold  text-5xl mb-2">Views trip latest shots</h2>
                    <p className="text-white">Mlor sit amet, consectetur adipiscing elit. Arcu at viverra eget porttitor condimentum nisl pool.</p>
                </span>
                <div className="bg-gray-700/40 z-10 overflow-hidden  h-screen w-full absolute"></div>

            </div>
            <div className="max-w-6xl mx-auto">
                <Outlet />
            </div>
         
       </div>
    );
};

export default Root;