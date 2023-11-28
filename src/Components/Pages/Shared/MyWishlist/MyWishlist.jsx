/* eslint-disable no-unused-vars */
import { useContext } from "react";
import WishlistDetail from "./WishlistDetail";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import empty from '../../../../assets/emptyCart.json';
import { Link } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useWishlist from "../Hooks/useWishlist";


const MyWishlist = () => {
    const [wishlist, refetch] = useWishlist();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const price = wishlist.reduce((total, tour) => total + tour.price, 0);
    const totalPrice = price.toFixed(2);

    // bgStyle 
    const backgroundUrl = 'https://i.imgur.com/SWXaDkU.png';

    const containerStyle2 = {
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',

    };
 
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
                axiosSecure.delete(`/wishlist/${id}`)
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

    return (
        <div>
            <div className=" max-w-6xl">

                {
                    wishlist.length > 0 ?
                        <div style={containerStyle2} className=" flex flex-col max-w-6xl mx-auto mt-12 p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 rounded-xl shadow-xl">
                            <h2 className="text-2xl font-semibold text-center text-blue-600 animate-pulse">My Wishlist</h2>
                            <ul className="flex flex-col divide-y divide-gray-700 ">
                                {
                                    wishlist.map(tour => <WishlistDetail
                                        key={tour._id}
                                        tour={tour}
                                        handleDelete={handleDelete}

                                    ></WishlistDetail>)
                                }


                            </ul>
                            <div className="space-y-1 text-center">
                                <p>Total amount:
                                    <span className="font-semibold">${totalPrice}</span>
                                </p>
                                <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
                            </div>
                            <div className="flex justify-center ">
                                <Link to='/'>  <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                                    <span className="text-[#E8604C] sr-only sm:not-sr-only"> to shop</span>
                                </button>
                                </Link>
                                <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                                    <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
                                </button>
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

export default MyWishlist;