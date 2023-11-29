import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Shared/Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUsers } from "react-icons/fa";
import Lottie from "lottie-react";
import load from '../../../../assets/loading.json';
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            // console.log(res.data)
            return res.data;
        }
    });

    const backgroundImageUrl = 'https://i.imgur.com/HiCpPNc.png';

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',

    };
    const handleDeleteUser = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${_id}`)
                    .then(res => {

                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })
                // 
            }
        });
    };

    const handleMakeRole = (user) => {
        Swal.fire({
            // title: "Are you sure?",
            // text: "You won't be able to revert this!",
            // icon: "warning",
            // showCancelButton: true,
            // confirmButtonColor: "#3085d6",
            // cancelButtonColor: "#d33",
            // confirmButtonText: "Yes, Confirm!"
            title: "Select Role",
            text: "Please choose the role you want to assign to this user:",
            icon: "info",
            input: "select",
            inputOptions: {
                admin: "Admin",
                guide: "Guide"
            },
            inputAttributes: {
                autofocus: true
            },
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Assign Role"
        }).then((result) => {
            if (result.isConfirmed) {
                const selectedRole = result.value;
                axiosSecure.patch(`/users/role/${user._id}`, { role: selectedRole })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.matchedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Role Assigned!",
                                text: `${user.name} is now a ${selectedRole}!`,
                                icon: "success"
                            });
                        }
                    })
            }
        })

    };

    if (isLoading) {
        return <div className="h-screen flex justify-center items-center"><Lottie
            animationData={load} className="h-48 md:h-64"></Lottie></div>
    }
    return (
        <><Helmet>
            <title>SkyTrip | All Users</title>
        </Helmet>
            <div style={containerStyle}>
                <div className="mx-auto max-w-lg pt-10">
                    <h1 className="text-center text-2xl font-bold text-[#d2614a] sm:text-3xl">
                        ---- All Users ----
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
                        dolores deleniti inventore quaerat mollitia?
                    </p>
                </div>
                <div className="max-w-3xl mb-10
                 bg-gradient-to-b from-[#c9ada7] via-gray-200 to-[#9a8c98]
                 mx-auto space  p-5 md:p-8 lg:p-12 shadow-xl rounded-md">
                    <div className=" mb-8">
                        <h2 className="text-4xl text-center font-bold">Total Users: {users?.length}</h2>

                    </div>
                    <div className="">
                        <div className="overflow-x-auto rounded-t-xl ">
                            <table className="table  ">
                                {/* head */}
                                <thead className="bg-[#e77a5f] ">
                                    <tr >
                                        <th>
                                            #
                                        </th>
                                        <th>IMAGE AND NAME</th>
                                        <th>Email</th>
                                        <th>ROLE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        users.map((user, index) => <tr key={user._id} >
                                            <th>
                                                {index + 1}
                                                {/* name, recipe, image, price, _id */}
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar shadow-md rounded-lg shadow-amber-950">
                                                        <div className="mask mask-square  w-12 h-12">
                                                            <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                                        </div>

                                                    </div>
                                                    <h2>{user.name}</h2>
                                                </div>
                                            </td>
                                            <td>

                                                <span
                                                    className="badge badge-neutral badge-md">
                                                    {user.email}</span>
                                            </td>
                                            <td>
                                                {
                                                    user.role === "admin" ?
                                                        <p className="font-bold italic text-[#6a2f21]">ADMIN</p> :
                                                        user.role === "guide" ?
                                                            <p className="font-bold italic text-[#216a3f]">Guide</p> :
                                                            <button onClick={() => handleMakeRole(user)}
                                                                className="btn btn-outline btn-sm text-white
                                                     bg-[#474a6c]">
                                                                <FaUsers />
                                                            </button>
                                                }

                                            </td>
                                            <th>
                                                <button onClick={() => handleDeleteUser(user._id)}
                                                    className="btn btn-info btn-sm text-white
                                                     bg-[#e17254]">
                                                    <FaTrash />
                                                </button>
                                            </th>
                                        </tr>)
                                    }




                                    {/* row 1 */}


                                </tbody>
                                {/* foot */}


                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllUsers;