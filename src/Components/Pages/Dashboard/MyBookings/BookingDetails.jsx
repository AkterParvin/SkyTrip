/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FcDeleteDatabase } from "react-icons/fc";
import { MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';

const BookingDetails = ({ tour, handleDelete }) => {
    const { user } = useContext(AuthContext);
    const { tourist_name, tour_id, price, tourist_email, guide_name, type, date, touristImage, image, title } = tour;
    return (
        <div className="w-[60%] mx-auto">
            <li className="flex flex-col px-5 shadow-lg rounded-lg py-6 sm:flex-row sm:justify-between bg-gray-100">
                <div className="flex w-full space-x-2 sm:space-x-6">

                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={image} alt="Polaroid camera" />
                    <div className="flex flex-col justify-between w-full pb-4 ">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1 md:mr-8">
                                <h3 className="text-lg font-semibold leadi sm:pr-8">{title}</h3>
                                <p className="text-sm dark:text-gray-400">Price: {price}</p>
                                <p className="text-sm dark:text-gray-400">Guide Name: <br /> {guide_name}</p>
                                <p className="text-sm dark:text-gray-400">Guide Email: <br /> {type}</p>
                                <p className="text-sm dark:text-gray-400"></p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">{price}</p>
                                <p className="text-sm  dark:text-gray-600"> Name: {}</p>
                            </div>
                        </div>
                        <div className="flex text-sm gap-1">
                            <button onClick={() => handleDelete(tour_id)} type="button" className="flex items-center bg-yellow-100 border shadow-xl hover:bg-emerald-100 hover:border-emerald-500 border-yellow-500 rounded px-2 py-1 pl-0 space-x-1">
                                <FcDeleteDatabase className="text-xl"></FcDeleteDatabase>
                                <span>Remove</span>
                            </button>


                            <Link to={`/tourdetails/${tour_id}`}>  <button type="button" className="flex items-center bg-sky-100 border shadow-xl hover:bg-emerald-100 hover:border-emerald-500 border-sky-500 rounded px-2 py-1 pl-0 space-x-1">
                                <MdFavorite className="text-xl text-rose-300"></MdFavorite>
                                <span>See Details</span>
                            </button></Link>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
};
BookingDetails.propTypes = {
    tour: PropTypes.object.isRequired,
    handleDelete: PropTypes.func,
    handleUpdate: PropTypes.func
}
export default BookingDetails;