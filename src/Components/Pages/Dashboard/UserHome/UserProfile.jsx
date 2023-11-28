import { useContext } from "react";
import { FacebookShareButton, WhatsappShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, LinkedinIcon, WhatsappIcon } from "react-share";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Shared/Hooks/useAxiosPublic";
import useAxiosSecure from "../../Shared/Hooks/useAxiosSecure";
import { FaShare } from "react-icons/fa";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const tourist_name = user?.displayName;
    const tourist_email = user?.email;

    const onSubmit = async (data) => {
        // console.log(data);
        // image upload to imgbb and get an imgurl 
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });
        console.log(res.data);
        if (res.data.success) {
            const storyDoc = {
                tourist_name,
                tourist_email,
                price: data.price,
                detail: data.detail,
                guide_name: data.guide_name,
                type: data.type,
                date: data.date,
                storyImage: res.data.data.display_url,
            };
            const bookingRes = await axiosSecure.post("/stories", storyDoc);
            // console.log(bookingRes.data);
            if (bookingRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.type} tour story shared n `,
                    showConfirmButton: false,
                    timer: 1500
                });
            }


        }
        
        
        
    };
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
        <>
            <Helmet>
                <title>SkyTrip | User Profile</title>
            </Helmet>
            <div style={containerStyle} className="">
                <div className="p-5 text-lg">
                    <h1 className="flex gap-2 ">Hi<p className="italic font-semibold text-[#b14434]">{user?.displayName} </p>  Welcome back!!!</h1>
                </div>
                <div className="lg:w-[60%] mx-auto p-6 bg-stone-200 shadow-xl rounded-lg">
                    <div className="flex justify-center items-center hover:rounded-lg mx-auto w-[40%]" >
                        <img className="w-auto h-12  " src="/logo.png" alt="" />

                    </div>

                    <p className="mt-3 text-xl text-center font-semibold text-gray-700 dark:text-gray-200">
                        Share Now !
                    </p>


                    <div className="flex items-center justify-between my-4">
                        <span className="w-1/5 border-b border-[#E8604C] dark:border-gray-600 lg:w-1/4"></span>

                        <span className="w-1/5 border-b border-[#E8604C] dark:border-gray-400 lg:w-1/4"></span>
                    </div>
                    <div className="px-12 mb-5">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* tourist name  */}
                            <div className="mb-3">
                                <label className="block mb-2 text-sm text-gray-800 font-medium dark:text-yellow-500 uppercase">Tourist Name</label>
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
                                <label className="block mb-2 text-sm text-gray-800 font-medium dark:text-yellow-500 uppercase">Tourist Email</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    name="email"
                                    readOnly
                                    defaultValue={tourist_email}
                                    placeholder="Type here" className="input input-bordered input-error w-full "
                                />
                            </div>

                            {/* Experience details  */}
                            <div className="mb-4">
                                <label className="block mb-2 text-sm text-gray-800 font-medium dark:text-yellow-500 uppercase">Share about your journey</label>
                                <textarea
                                    {...register("detail", { required: true })}
                                    name="detail"
                                    className="textarea w-full h-24 md:h-48  textarea-error" placeholder="Share your Experience!!!"></textarea>
                            </div>

                            {/* guide and tourtype  */}
                            <div className="flex uppercase justify-between items-center flex-col md:flex-row  gap-5 mb-4" >
                                {/* tour_type  */}
                                <div className="flex-1 max-w-xl">

                                    <label className=" block mb-2 text-sm text-gray-800 font-medium dark:text-yellow-500 uppercase">
                                        <span className="label-text">Taken Tour Type*</span>

                                    </label>
                                    <select
                                        // defaultValue={"default"}
                                        {...register("type", { required: true })}
                                        className="select select-bordered w-full max-w-xs">
                                        <option disabled value={"default"}>Your Tour Type</option>
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

                                    <label className=" block mb-2 text-sm text-gray-800 font-medium dark:text-yellow-500 uppercase ">
                                        <span className="label-text">Your Guide Name*</span>

                                    </label>
                                    <select
                                        // defaultValue={"default"}
                                        {...register("guide_name", { required: true })}
                                        className="select select-bordered w-full max-w-xs ">
                                        <option disabled value={"default"}>Your Guide?</option>

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
                                <label className="label uppercase">
                                    <span className="label-text">Price*</span>

                                </label>
                                <input
                                    {...register("price", { required: true })}
                                    name="price"
                                    type="number"

                                    defaultValue={"$ "}
                                    placeholder="Type here" className="input input-error input-bordered w-full "
                                />

                            </div>

                            <div className="flex justify-between items-center flex-col md:flex-row  gap-5 " >
                                {/* date  */}
                                <div className="mb-6  border-red-300 py-2">
                                    <label className="label ">
                                        <span className="label-text">Toured Date*</span>

                                    </label>
                                    <input type="date" name="date" id="" {...register("date", { required: true })} />


                                </div>

                                {/* images  */}
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
                            </div>


                            {/* button booking  */}
                            <div className="items-center justify-center flex py-3">
                                {/* <button type="submit" className="relative inline-flex items-center w-[90%] mx-auto py-2 overflow-hidden text-lg font-medium text-white bg-[#E8604C]  border-2 border-[#E8604C] rounded-xl hover:text-gray-900 group hover:bg-[#f8d1cb]">
                                <span className="absolute left-0 block w-full h-0 transition-all bg-[#f8d1cb] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
                                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-500 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="pl-4 flex items-center justify-center"> <FaShare />
                                    <span className="relative pl-1">Share Now</span>
                                </span>
                            </button> */}
                                <button type="submit" className="relative px-6 py-2 font-bold text-gray-800 group  w-[70%] ">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-3 -translate-y-3 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg "></span>
                                    <span className="absolute inset-0 w-full h-full border-4 border-gray-800 rounded-lg"></span>
                                    <span className="relative flex items-center justify-center gap-2">
                                        <FaShare /> <p>Share Now</p>

                                    </span>
                                </button>
                            </div>


                        </form>
                    </div>

                    <div className="flex flex-col justify-center items-center py-4 rounded-xl shadow-xl gap-5 bg-gray-800 w-1/2 mx-auto">
                        <span><h2 className="text-white font-bold">Share with your Social Media</h2></span>
                        <div className="flex justify-center items-center gap-5">
                            <FacebookShareButton url={"https://automotive-brandshop-client.vercel.app"}>
                                <FacebookIcon size={43} round />
                            </FacebookShareButton>
                            <LinkedinShareButton url={"https://automotive-brandshop-client.vercel.app"}>
                                <LinkedinIcon size={43} round />
                            </LinkedinShareButton>
                            <WhatsappShareButton url={"https://automotive-brandshop-client.vercel.app"}>
                                <WhatsappIcon size={43} round />
                            </WhatsappShareButton>
                        </div>
                    </div>
                    
                </div>
               

            </div>
        </>
    );
};
// BookingForm.propTypes = {
//     tourDetails: PropTypes.object.isRequired,

// }
export default UserProfile;