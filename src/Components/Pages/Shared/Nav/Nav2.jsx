import { FaFacebook, FaInstagram, FaLock, FaPhoneSquare, FaTwitter, FaUser, FaUserLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const Nav2 = () => {
    return (
        <div className="h-12 border-b-4 border-[#f97150] flex items-center justify-between gap-2 max-w-6xl mx-auto ">
            <div className="justify-start items-center md:flex hidden lg:gap-5 gap-3 px-2" >
                <span className="flex items-center gap-2">
                    <FaPhoneSquare color="#4a5568" size={"18"}/>
                    <p className="text-gray-700 text-sm font-medium">
                        +8801234566790</p> 
                </span>
                <span className="flex items-center gap-2">
                    <MdEmail color="#4a5568" size={"18"}/>
                    <p className="text-gray-700 text-sm font-medium">
                        abdc.19@gmail.com</p> 
                </span>
                
            </div>
            <div className="flex justify-end items-center px-3 md:gap-4 flex-1 md:ml-5">
                <div className="flex gap-4 border-r-2 h-full border-gray-400 pr-2">
                    <div className=" text-[#4a5568] text-sm flex items-center md:gap-5 gap-3  ">
                        <FaFacebook /><FaInstagram /><FaTwitter />
                    </div>

                </div>
                <div className="flex items-center gap-2 md:gap-5 px-2">
                   <Link to={"/login"}> <span className="text-[#4a5568] text-sm flex items-center gap-2">
                        <FaLock />
                        <p className="text-gray-700  font-bold">
                            Login</p> 
                    </span></Link>
                    <Link to={"/signup"}><span className="text-[#4a5568] text-sm flex items-center gap-2">
                        <FaUser/>
                        <p className="text-gray-700  font-bold">
                            SignUp</p> 
                    </span></Link> 
                </div>
            </div>
           
        </div>
    );
};

export default Nav2;