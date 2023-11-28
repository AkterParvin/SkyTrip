/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import PropTypes from 'prop-types';

import { useContext, useState } from "react";
import { FaBook } from "react-icons/fa";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BookingForm = ({ tourDetails }) => {
    const { price, _id, image, title } = tourDetails;
    const { user } = useContext(AuthContext);
    // console.log(user)
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();
    console.log();
    const tourist_name = user?.displayName;
    const tourist_email = user?.email;
    const tour_id = _id;
    

    const onSubmit = async (data) => {
        // console.log(data);
        // image upload to imgbb and get an imgurl 
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });
        // console.log(res.data);
        if (res.data.success) {
            const bookingDoc = {
                tourist_name,
                tour_id,
                price,
                tourist_email,
                guide_name: data.guide_name,
                type: data.type,
                date: data.date,
                image,
                title,
                touristImage: res.data.data.display_url
                    
            };
            const bookingRes = await axiosSecure.post("/bookings", bookingDoc);
            // console.log(bookingRes.data);
            if (bookingRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.type} tour is booked`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }

    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                        Get started today
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
                        dolores deleniti inventore quaerat mollitia?
                    </p>

                    {/* Tourist Name
                    ● Tourist Email
                    ● Tourist Image
                    ● Price
                    ● Tour Date (Use react-datepicker package for this)
                    ● Tour guide name (use drop-down to select the guide name)
                    ● Book Now button */}
                    <div className="w-full p-6 bg-stone-100 shadow-xl rounded-lg">
                        <div className="flex justify-center items-center hover:rounded-lg mx-auto hover:bg-[#e3bc9a]/40 hover:text-gray-200 w-[40%]" >
                            <img className="w-auto h-12  " src="/logo.png" alt="" />

                        </div>

                        <p className="mt-3 text-xl text-center font-semibold text-gray-700 dark:text-gray-200">
                            Book Now !
                        </p>


                        <div className="flex items-center justify-between my-4">
                            <span className="w-1/5 border-b border-[#E8604C] dark:border-gray-600 lg:w-1/4"></span>

                            <span className="w-1/5 border-b border-[#E8604C] dark:border-gray-400 lg:w-1/4"></span>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* tourist name  */}
                            <div className="mb-3">
                                <label className="block mb-2 text-sm text-gray-800 font-medium dark:text-yellow-500">Tourist Name</label>
                                <input
                                    readOnly
                                    type="text"
                                    name="name"
                                    defaultValue={tourist_name}
                                    placeholder="Type here" className="input input-bordered input-error w-full py-1"
                                />
                            </div>
                            {/* tourist email  */}
                            <div className="mb-3">
                                <label className="block mb-2 text-sm text-gray-800 font-medium dark:text-yellow-500">Tourist Email</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    name="email"
                                    readOnly
                                    defaultValue={tourist_email}
                                    placeholder="Type here" className="input input-bordered input-error w-full "
                                />
                            </div>
                            {/* guide and tourtype  */}
                            <div className="flex justify-between items-center flex-col md:flex-row  gap-5 mb-6" >
                                {/* tour_type  */}
                                <div className="flex-1 max-w-xl">

                                    <label className="label ">
                                        <span className="label-text">Tour Type*</span>

                                    </label>
                                    <select
                                        // defaultValue={"default"}
                                        {...register("type", { required: true })}
                                        className="select select-bordered w-full max-w-xs">
                                        <option disabled value={"default"}>Select a Type</option>
                                        <option value="sports">Sports</option>
                                        <option value="hiking">Hiking</option>
                                        <option value="wildlife">Wildlife</option>
                                        <option value="honeymoon">Honeymoon</option>
                                        <option value="airrides">Airrides</option>
                                        <option value="seabeach">Seabeach</option>
                                        <option value="camping">Camping</option>
                                        <option value="boatriding">Boatriding</option>
                                        <option value="historical">Historical</option>

                                    </select>
                                </div>

                                {/* guide  */}
                                <div className="flex-1 max-w-xl">

                                    <label className="label ">
                                        <span className="label-text">Tour Guide*</span>

                                    </label>
                                    <select
                                        // defaultValue={"default"}
                                        {...register("guide_name", { required: true })}
                                        className="select select-bordered w-full max-w-xs ">
                                        <option disabled value={"default"}>Select a Guide</option>

                                        <option value="Isabella Wright">
                                            Isabella Wright
                                        </option>

                                        <option value="Nikos Georgiou">
                                            Nikos Georgiou
                                        </option>

                                        <option value="David Brute">
                                            David Brute
                                        </option>

                                        <option value="Mark Johnson">
                                            Mark Johnson
                                        </option>

                                        <option value="Carlos Rodriguez">
                                            Carlos Rodriguez
                                        </option>

                                        <option value="Rahul Das">
                                            Rahul Das
                                        </option>

                                        <option value="Sophie Berg">
                                            Sophie Berg
                                        </option>

                                        <option value="Rahim Khan">
                                            Rahim Khan
                                        </option>

                                        <option value="Rajesh Thapa">
                                            Rajesh Thapa
                                        </option>

                                    </select>
                                </div>
                            </div>

                            {/* price  */}
                            <div className=" flex-1 max-w-xl mb-6">
                                <label className="label ">
                                    <span className="label-text">Price*</span>

                                </label>
                                <input
                                    {...register("price", { required: true })}
                                    name="price"
                                    type="text"
                                    readOnly
                                    defaultValue={"$ " + price}
                                    placeholder="Type here" className="input input-error input-bordered w-full "
                                />

                            </div>

                            {/* date  */}
                            <div className="mb-6  border-red-300 py-2">
                                <label className="label ">
                                    <span className="label-text">Select Tour Date*</span>

                                </label>
                                <input type="date" name="date" id="" {...register("date", { required: true })} />


                            </div>


                            <div className="mb-6">
                                <label className="label ">
                                    <span className="label-text">Tourist Image*</span>

                                </label>
                                <input
                                    {...register("image", { required: true })}
                                    name="image"
                                    type="file"
                                    className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                                />
                            </div>

                            {/* button booking  */}
                            <div className="items-center justify-center flex py-3">
                                <button type="submit" className="relative inline-flex items-center w-[90%] mx-auto py-2 overflow-hidden text-lg font-medium text-white bg-[#E8604C]  border-2 border-[#E8604C] rounded-xl hover:text-gray-900 group hover:bg-[#f8d1cb]">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-[#f8d1cb] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-500 transform translate-x-full group-hover:translate-x-0 ease">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="pl-4 flex items-center justify-center"> <FaBook />
                                        <span className="relative pl-1">Book Tour</span>
                                    </span>
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};
BookingForm.propTypes = {
    tourDetails: PropTypes.object.isRequired,
    
}
export default BookingForm;