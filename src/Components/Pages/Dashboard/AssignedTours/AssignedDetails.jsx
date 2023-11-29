/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { BiSolidMessageAltDetail } from "react-icons/bi";

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecure from '../../Shared/Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaExchangeAlt } from 'react-icons/fa';


const AssignedDetails = ({ tour, handleUpdate }) => {
    const { user } = useContext(AuthContext);
    const { tourist_name, tour_id, price, tourist_email, guide_email, type, date, image, title, touristImage ,status,_id} = tour;
    // console.log(tour);
    const axiosSecure = useAxiosSecure();


    return (
        <div className="w-[85%] mx-auto">
            <li className="flex flex-col px-5 shadow-lg rounded-lg py-6 sm:flex-row sm:justify-between bg-gray-100">
                <div className="flex w-full space-x-2 sm:space-x-6">

                    <img className="flex-shrink-0 object-cover w-24 h-24 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={image} alt="Polaroid camera" />
                    <div className="flex flex-col justify-between w-full pb-4 ">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1 md:mr-4 mb-2">
                                <h3 className="text-lg font-semibold leadi sm:pr-8 text-[#e8604c]">{title}</h3>
                                <p className="text-sm font-semibold dark:text-gray-400">Tour Date: <span className='text-[#e8604c] italic'>{date}</span> </p>
                                <p className="text-sm dark:text-gray-400 font-semibold">Tourist Name:<span className='text-[#e8604c] italic uppercase'> {tourist_name}</span> </p>
                                <p className="text-sm dark:text-gray-400 font-semibold">Tourist Email:<span className='text-[#e8604c] italic uppercase'> {tourist_email}</span></p>
                                <p className="text-sm dark:text-gray-400 font-semibold"></p>
                            </div>
                            <div className="text-right space-y-1">
                                <p className="text-lg font-semibold"><span className='text-[#a84333] uppercase'>Price: </span> ${price}</p>
                                <p className="text-sm  dark:text-gray-600 font-semibold">Guide Name:<span className='text-[#e8604c] italic uppercase'>{user?.displayName}</span>  </p>
                                <p className="text-sm  dark:text-gray-600 font-semibold"> Status:<span className='text-[#e8604c] italic uppercase'> {status}</span> </p>
                            </div>
                        </div>
                        <div className="flex text-sm gap-1">
                            <button onClick={() => handleUpdate(_id)} type="button" className="flex items-center bg-[#efd8d3] border shadow-xl hover:bg-red-300 hover:border-gray-800 border-red-500 rounded px-2 py-2 pl-0 space-x-1 font-semibold">
                                <FaExchangeAlt className="text-lg text-gray-800 "></FaExchangeAlt>
                                <span>Change Status</span>
                            </button>


                            <Link to={`/tourdetails/${tour_id}`}>  <button type="button" className="flex items-center bg-sky-100 border shadow-xl hover:bg-emerald-100 hover:border-emerald-500 border-sky-500 rounded px-3 py-2 pl-0 font-semibold">
                                <BiSolidMessageAltDetail className="text-xl text-gray-800 " />
                                <span>See Details</span>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
};
AssignedDetails.propTypes = {
    tour: PropTypes.object.isRequired,
    handleUpdate: PropTypes.func,
    // handleUpdate: PropTypes.func
}
export default AssignedDetails;