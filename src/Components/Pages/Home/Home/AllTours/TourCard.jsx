/* eslint-disable no-unused-vars */
import { IoIosHeart } from "react-icons/io";
import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Shared/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useWishlist from "../../../Shared/Hooks/useWishlist";

const TourCard = ({ tour }) => {
    const { user } = useContext(AuthContext)
    const { title, image, type, price, _id, guide_name, guide_email, spot_name } = tour;
    // console.log(_id);
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useWishlist();
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (user && user.email) {
            const wishedTour = {
                tourId: _id,
                email: user.email,
                title,
                image,
                type,
                price,
                guide_name,
                guide_email,
                spot_name
            };
            axiosSecure.post("/wishlist", wishedTour)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire(`${title} added to Wishlist!`);
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add tour to Wishlist",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    };

    return (
        <div className='lg:w-[90%] mx-auto'>


            <div className="max-w-md bg-transparent bg-slate-100 border shadow-xl   rounded-lg dark:bg-gray-800 dark:border-gray-700 relative h-[60vh]">
                <button onClick={handleClick} className="top-[5%] right-[10%] absolute bg-gray-600 p-2  text-xl text-[#E8604C] rounded-full">
                    <IoIosHeart />
                </button>
                <span >
                    <img className="rounded-t-lg h-48 w-full  object-cover" src={image} alt="" />
                </span>
                <div className="p-3">
                    <span >
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title.slice(0, 25)} ...</h5>
                    </span>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Tour Type: <span className="text-[#E8604C] font-semibold">{type}</span>
                    </p>
                    <p className="mb-4 flex-grow text-sm font-normal text-gray-700 dark:text-gray-400">Price: <span className="text-[#E8604C] font-semibold">${price}</span> </p>

                    <Link to={`/tourdetails/${_id}`}> <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#E8604C] rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Explore More
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button></Link>
                </div>
            </div>

        </div>
    );
};
TourCard.propTypes = {
    tour: PropTypes.object
}
export default TourCard;