/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../Shared/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import empty from '../../../../assets/emptyCart.json';
import AssignedDetails from "./AssignedDetails";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Shared/Hooks/useAxiosPublic";


const AssignedTours = () => {
    const backgroundUrl = 'https://i.imgur.com/SWXaDkU.png';

    const containerStyle = {
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',

    };
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const axiosPublic=useAxiosPublic();
    const [loading, setLoading] = useState(true);

    // const { data: bookings = [], refetch, isLoading,isError} = useQuery({
    //     queryKey: ["bookings", user?.email],
    //     queryFn: async () => {
    //         const result = await axiosSecure.get(`/assignedtours?guide_email=${user.email}`)
    //         isLoading;
    //         return result.data;
    //     },
    // })


    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        axiosPublic.get(`/assignedtours?guide_email=${user?.email}`)
            .then(res => {
                setLoading(false); // Set loading to false when data is fetched
                // console.log(res.data);
                setBookings(res.data);
            })
            .catch(error => {
                // Handle errors
                setLoading(false); // Set loading to false in case of errors
                console.error("Error fetching data:", error);
            });
    }, [axiosPublic, user?.email]);

    const handleStatusChange = (id, newStatus) => {
        axiosPublic.patch(`/bookings/${id}`, { status: newStatus })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    const updatedItem = bookings.find(item => item._id === id);
                    updatedItem.status = newStatus;
                    const remaining = bookings.filter(item => item._id !== id);
                    setBookings([updatedItem, ...remaining]);
                   
                    Swal.fire({
                        title: "Status Updated Successfully",
                        text: `The booking status for ID ${id} has been updated to ${newStatus}.`,
                        icon: "success",
                    });
                }
            });
    };
    const handleUpdate = id => {
        Swal.fire({
            title: "Change Status",
            text: "Please choose Status to update information of this package:",
            icon: "info",
            input: "select",
            inputOptions: {
                accept: "Accept",
                reject: "Reject"
            },
            inputAttributes: {
                autofocus: true
            },
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Update Status"
        }).then((result) => {
            if (result.isConfirmed) {
                const selectedStatus = result.value;
                if (selectedStatus === "accept") {
                    handleStatusChange(id, "accepted");
                } else if (selectedStatus === "reject") {
                    handleStatusChange(id, "rejected");
                }

            }
        });
    };





    return (
        <div className="h-full max-w-6xl">

            {
                bookings?.length > 0 ?
                    <div style={containerStyle} className=" flex flex-col max-w-6xl mx-auto  p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 rounded-xl shadow-xl">
                        <h2 className="text-2xl font-semibold text-center text-[#b14434] hover:animate-bounce">My Bookings</h2>
                        <ul className="flex flex-col divide-y divide-gray-700 ">
                            {
                                bookings.map(tour => <AssignedDetails
                                    key={tour._id}
                                    tour={tour}
                                    handleUpdate={handleUpdate}

                                ></AssignedDetails>)
                            }


                        </ul>


                    </div> :
                    <div className=" h-[90vh] md:h-[60vh] flex items-center justify-center max-w-3xl mx-auto flex-col">
                        <h2 className="text-xl md:text-3xl text-center font-bold text-blue-700">Sorry you do not have any Bookings</h2>

                        <Lottie animationData={empty} className="h-48 md:h-64"></Lottie>

                    </div>
            }

        </div>
    );
};

export default AssignedTours;