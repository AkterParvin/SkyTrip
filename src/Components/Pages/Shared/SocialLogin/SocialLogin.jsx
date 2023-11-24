import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";


const SocialLogin = () => {
    const { googleSignup } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        googleSignup()
            .then(res => {
                console.log(res.user);
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                    
                }
                // axiosPublic.post("/users",user)
        })
    }
    return (
        <div className="my-6 text-center space-y-4">
            <div className="flex items-center justify-between my-4">
                <span className="w-1/3 border-b border-[#c49b3a] dark:border-gray-600 lg:w-1/4"></span>
                <p>Or Signup with</p>
                <span className="w-1/3 border-b border-[#c49b3a] dark:border-gray-600 lg:w-1/4"></span>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <button onClick={handleGoogleLogin} className='btn btn-circle bg-[#dbcaa5] '>
                    <FcGoogle size={"24px"} />
                </button>
                <button className='btn btn-circle bg-[#dbcaa5] text-blue-600'>
                    <FaFacebookF size={"24px"} />
                </button>
                <button className='btn btn-circle bg-[#dbcaa5] text-blue-600 '>
                    <BiLogoLinkedin size={"24px"} />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;