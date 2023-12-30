/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { FaCut, FaDollarSign, FaMoneyBill, FaTrash } from 'react-icons/fa';
import ReactConfetti from '../../Shared/confetti/ReactConfetti';

const BookingDetails = ({ tour, handleDelete, bookings }) => {
    const { user } = useContext(AuthContext);

    const { tourist_name, tour_id, price, tourist_email, guide_email, type, date, image, title, touristImage, status, _id } = tour;
    console.log(_id)
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
                                <p className="text-sm  dark:text-gray-600 font-semibold mb-1">Guide email:<span className='text-[#e8604c] italic uppercase '>{guide_email}</span>  </p>
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
                        <div className="flex text-sm gap-3 mt-10">
                            {
                                status === "in review" ? <> <button onClick={() => handleDelete(_id)} className="relative  items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-[#2F4858] rounded-xl hover:bg-[#f08f6f] group">
                                    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-300 transition-all border-[#6baef1] rounded-xl"></span>
                                    <span className="relative w-full text-sm text-left text-gray-100 transition-colors duration-500 ease-in-out group-hover:text-gray-800 flex items-center justify-center gap-1">
                                        <FaTrash className="text-sm text-red-500"></FaTrash> <p>Cancel</p></span>
                                </button></> :
                                    <> <button disabled onClick={() => handleDelete(tour_id)} className="flex items-center justify-center gap-1 btn btn-sm">
                                        <FaTrash className="text-sm text-gray-200"></FaTrash> <p>Cancel</p>
                                    </button>
                                    </>
                            }
                            {
                                status === "accepted" ?
                                    <> <button className="relative  items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-[#b04838] rounded-xl hover:bg-white group">
                                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-300 transition-all border-[#fff1ec] rounded-xl"></span>
                                        <span className="relative w-full text-sm text-left text-gray-100 transition-colors duration-500 ease-in-out group-hover:text-gray-800 flex items-center justify-center ">
                                            <FaDollarSign color='' /> <p>Pay Bill</p></span>
                                    </button>
                                    </> :
                                    <>
                                        <button disabled  className="flex items-center justify-center gap-1 btn btn-sm">
                                            <FaDollarSign className="text-sm text-gray-200"></FaDollarSign> <p>Pay Bill</p>
                                        </button>
                                    </>
                            }
                            {
                                bookings?.length > 3 ? <> <ReactConfetti /> </> :
                                    <>
                                        <button disabled className="flex items-center justify-center gap-1 btn btn-sm">
                                            <FaMoneyBill className="text-sm text-gray-200"></FaMoneyBill> <p>Apply Discount</p>
                                        </button>  
                                    </>
                            }
                         

                            {/* <Link to={`/tourdetails/${tour_id}`}>  <button type="button" className="flex items-center bg-sky-100 border shadow-xl hover:bg-emerald-100 hover:border-emerald-500 border-sky-500 rounded px-3 py-2 pl-0 font-semibold">
                                <BiSolidMessageAltDetail className="text-xl text-gray-800 " />
                                <span>See Details</span>
                            </button>
                            </Link> */}

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
    bookings: PropTypes.array
}
export default BookingDetails;