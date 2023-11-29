/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { FaTrash } from 'react-icons/fa';

const BookingDetails = ({ tour, handleDelete }) => {
    const { user } = useContext(AuthContext);
   
    const { tourist_name, tour_id, price, tourist_email, guide_email, type, date, image, title, touristImage, status, _id } = tour;
    return (
        <div className="w-[85%] mx-auto">
            <li className="flex flex-col px-5 shadow-lg rounded-lg py-6 sm:flex-row sm:justify-between bg-blue-100">
                <div className="flex w-full space-x-2 sm:space-x-6">

                    <img className="flex-shrink-0 object-cover w-24 h-24 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={image} alt="Tour Image" />
                    <div className="flex flex-col justify-between w-full pb-4 ">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1 md:mr-4 mb-2">
                                <h3 className="text-lg font-semibold leadi sm:pr-8 text-[#e8604c]">{title}</h3>
                                <p className="text-sm font-semibold dark:text-gray-400">Tour Date: <span className='text-[#e8604c] italic'>{date}</span> </p>
                                <p className="text-sm dark:text-gray-400 font-semibold">Tourist Name:<span className='text-[#e8604c] italic uppercase'> {tourist_name}</span> </p>
                                <p className="text-sm dark:text-gray-400 font-semibold">Tourist Email:<span className='text-[#e8604c] italic uppercase'> {tourist_email}</span></p>
                                <p className="text-sm dark:text-gray-400 font-semibold"></p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold mb-1"><span className='text-[#a84333] uppercase'>Price: </span> ${price}</p>
                                <p className="text-sm  dark:text-gray-600 font-semibold mb-1">Guide Name:<span className='text-[#e8604c] italic uppercase '>{user?.displayName}</span>  </p>
                                <p className="text-sm  dark:text-gray-600 font-semibold mb-2"> Status:<span className='text-[#e8604c] italic uppercase '> {status}</span> </p>

                                <Link to={`/tourdetails/${tour_id}`}>
                                    <a className="relative inline-flex items-center justify-start py-1 pl-4 pr-10 overflow-hidden font-semibold text-[#e8604c] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-5 bg-white group shadow-xl">
                                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-800 group-hover:h-full"></span>
                                        <span className="absolute right-0 pr-2 duration-200 ease-out group-hover:translate-x-12">
                                            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute left-0 pl-2 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                            <svg className="w-5 h-5 text-[#e8604c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Tour Details</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex text-sm gap-1">

                            <button onClick={() => handleDelete(tour_id)} type="button" className="flex items-center bg-[#efd8d3] border shadow-xl hover:bg-red-300 hover:border-gray-800 border-red-500 rounded px-3 py-2 pl-0 space-x-1 font-semibold">
                                <FaTrash className="text-xl text-red-900"></FaTrash>
                                <span>Cancel</span>
                            </button>
                            <a  className="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
                                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Button Text</span>
                            </a>
                            <a href="#_" className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#a84333]/10"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-[#a84333] transition-colors duration-200 ease-in-out group-hover:text-gray-900">Button Text</span>
                                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                            </a>

                           
                            <Link to={`/tourdetails/${tour_id}`}>  <button type="button" className="flex items-center bg-sky-100 border shadow-xl hover:bg-emerald-100 hover:border-emerald-500 border-sky-500 rounded px-3 py-2 pl-0 font-semibold">
                                <BiSolidMessageAltDetail className="text-xl text-gray-800 " />
                                <span>See Details</span>
                            </button>
                            </Link>
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
BookingDetails.propTypes = {
    tour: PropTypes.object.isRequired,
    handleDelete: PropTypes.func,
    // handleUpdate: PropTypes.func
}
export default BookingDetails;