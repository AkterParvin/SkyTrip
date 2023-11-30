/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import empty from '../../../../assets/emptyCart.json';
import useBookings from "../../Shared/Hooks/useBookings";
import { Link } from "react-router-dom";
import WishlistDetail from "../../Shared/MyWishlist/WishlistDetail";
import useAxiosSecure from "../../Shared/Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import BookingDetails from "./BookingDetails";

const MyBookings = () => {
    const [bookings, refetch, loading] = useBookings();
    console.log(bookings);
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const price = bookings?.reduce((total, tour) => total + tour.price, 0);
    const totalPrice = price.toFixed(2);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/bookings/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Wishlist item is deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })

            }
        })
    }


    const backgroundImageUrl = 'https://i.imgur.com/HiCpPNc.png';

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',

    };
    return (
        <div>
            <div className="h-full max-w-6xl">

                {
                    bookings.length > 0 ?
                        <div style={containerStyle} className=" flex flex-col max-w-6xl mx-auto  p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 rounded-xl shadow-xl">
                            <h2 className="text-2xl font-semibold text-center text-[#b14434] hover:animate-bounce">My Bookings</h2>
                            <ul className="flex flex-col divide-y divide-gray-700 ">
                                {
                                    bookings.map(tour => <BookingDetails
                                        key={tour._id}
                                        tour={tour}
                                        handleDelete={handleDelete}
                                        bookings={bookings}
                                    ></BookingDetails>)
                                }


                            </ul>
                            <div className="bg-gray-800  w-[85%] mx-auto py-5 text-white">
                                <div className="space-y-1 text-center my-2">
                                    <p>Total amount:
                                        <span className="font-semibold text-[#E8604C]"> ${totalPrice}</span>
                                    </p>
                                    <p className="text-xs dark:text-gray-400">Not including taxes and shipping costs</p>
                                </div>
                                <div className="flex justify-center gap-3">
                                    <Link to='/'>  <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                                        <span className="text-[#E8604C] sr-only sm:not-sr-only"> to shop</span>
                                    </button>
                                    </Link>
                                    <button type="button" className="px-6 py-2 border rounded-md hover:bg-gray-100 hover:text-gray-800 transition-all duration-300 dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                                        <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
                                    </button>
                                </div>
                            </div>
                        </div> :
                        <div className=" h-[90vh] md:h-[60vh] flex items-center justify-center max-w-3xl mx-auto flex-col">
                            <h2 className="text-xl md:text-3xl text-center font-bold text-sky-700">Sorry you do not have any Bookings</h2>

                            <Lottie animationData={empty} className="h-48 md:h-64"></Lottie>

                        </div>
                }

            </div>
        </div>
    );
};

export default MyBookings;