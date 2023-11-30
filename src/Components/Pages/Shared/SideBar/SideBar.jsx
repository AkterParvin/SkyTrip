import { MdDashboard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import useWishlist from "../Hooks/useWishlist";
import { FaArrowsAlt, FaBlog, FaClipboardList, FaHome, FaTasks } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useBookings from "../Hooks/useBookings";
import Swal from "sweetalert2";
import { FaSignOutAlt } from "react-icons/fa";
import useUserRole from "../Hooks/useUserRole";


const SideBar = () => {
    const [isAdmin, isGuide, isRoleLoading] = useUserRole();
    // console.log(isAdmin, isGuide);
    const [wishlist] = useWishlist();
    const [bookings] = useBookings();
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged Out');
                Swal.fire(
                    'Logged Out Successfull!',
                    'You clicked the button!',
                    'success'
                )
                navigate("/")
            })
            .catch(error => console.log(error.message))
    }
    // console.log(user)
    return (
        <div>

            <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">

                <div className="h-full px-3 pb-4 overflow-y-auto bg-[#fcecea] dark:bg-gray-800 pt-10">
                    <div className="flex flex-col gap-2 justify-center items-center mb-5 bg-blue-100 rounded-xl  shadow-xl py-5">
                        <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">

                            <img className="w-20 h-20 rounded-full" src={user?.photoURL} alt="user photo" />
                        </button>
                        <span className="flex items-center justify-center gap-2 bg-slate-100 p-2 rounded-md">
                            <p className="text-base font-bold text-gray-800 dark:text-white">Name:</p>
                            <p className="text-base font-bold italic text-[#b14434] dark:text-white" role="none">
                                {user?.displayName}
                            </p>
                        </span>
                        <span className="flex items-center justify-center gap-2 bg-slate-100 p-2 rounded-md">
                            <p className="text-xs font-bold text-gray-800 dark:text-white">Email:</p>
                            <p className="text-xs font-bold  text-[#b14434] dark:text-white" role="none">
                                {user?.email}
                            </p>
                        </span>

                    </div>
                    <ul className="space-y-2 font-medium">
                       { isRoleLoading ? <p>Loading Data</p> :  <> {
                            isAdmin &&
                            <>
                                <li>
                                    <Link to={'/dashboard/adminprofile'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200  dark:hover:bg-gray-700 group">


                                        <ImProfile size={'26px'} color="#E8604C" />
                                        <span className="ms-3 text-gray-800">Admin Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/addpackage'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200  dark:hover:bg-gray-700 group">


                                        <ImProfile size={'26px'} color="#E8604C" />
                                        <span className="ms-3 text-gray-800">Add Package</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/allusers'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200  dark:hover:bg-gray-700 group">

                                        <ImProfile size={'26px'} color="#E8604C" />
                                        <span className="ms-3 text-gray-800">Manage Users</span>
                                    </Link>
                                </li>

                            </>}
                        {isGuide &&
                            <>
                                <li>
                                    <Link to={'/dashboard/guideprofile/:guide_email'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200  dark:hover:bg-gray-700 group">

                                        <ImProfile size={'26px'} color="#E8604C" />
                                        <span className="ms-3 text-gray-800">Guide Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/assignedtours'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200  dark:hover:bg-gray-700 group">

                                        <FaTasks size={'26px'} color="#E8604C" />
                                        <span className="ms-3 text-gray-800">Assigned Packages</span>
                                    </Link>
                                </li>
                            </>}
                        {!isAdmin && !isGuide && <>
                            <li>
                                <Link to={'/dashboard/userprofile'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#b9aaa8]  dark:hover:bg-gray-700 group">
                                    <MdDashboard size={'26px'} color="#E8604C" />
                                    <span className="ms-3 text-gray-800">Tourist Profile</span>
                                </Link>
                            </li>

                            <li>
                                <Link to={"/dashboard/mywishlist"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#b9aaa8] dark:hover:bg-gray-700 group">
                                    <BsFillBookmarkHeartFill size={'26px'} color="#E8604C" />

                                    <span className="flex-1 ms-3 whitespace-nowrap">My Wishlist</span>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-[#E8604C] rounded-full dark:bg-blue-900 dark:text-blue-300">+{wishlist.length}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/dashboard/mybookings"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#b9aaa8] dark:hover:bg-gray-700 group">
                                    <FaClipboardList size={'26px'} color="#E8604C" />
                                    <span className="flex-1 ms-3 whitespace-nowrap">My Bookings</span>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-[#E8604C] rounded-full dark:bg-blue-900 dark:text-blue-300">+{bookings.length}</span>
                                </Link>
                            </li>
                            <li >
                                <a onClick={handleLogOut} className="flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-[#b9aaa8] dark:hover:bg-gray-700 group">

                                    <FaSignOutAlt size={'26px'} color="#E8604C" />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>

                                </a>

                            </li>
                        </>}</>}


                        <div className="divider divider-error "></div>
                        <li>
                            <Link to={"/"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#b9aaa8] dark:hover:bg-gray-700 group">
                                <FaHome size={'26px'} color="#E8604C" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>

                            </Link>
                        </li>
                        <li>
                            <Link to={"/blogs"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#b9aaa8] dark:hover:bg-gray-700 group">
                                <FaBlog size={'26px'} color="#E8604C" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Blogs</span>

                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#b9aaa8] dark:hover:bg-gray-700 group">
                                <FaArrowsAlt size={'26px'} color="#E8604C" />
                                <span className="flex-1 ms-3 whitespace-nowrap">About Us</span>

                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>



        </div>
    );
};

export default SideBar;