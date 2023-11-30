import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Shared/Hooks/useAxiosSecure";
import useAxiosPublic from "../../Shared/Hooks/useAxiosPublic";
import { FaBook } from "react-icons/fa";
import useFindGuide from "../../Shared/Hooks/useFindGuide";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPackage = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [guides] = useFindGuide();
    // console.log(guides);
    const guidesData = guides ? guides.map(guide => {
        return {
            guide_name: guide.name,
            guide_email: guide.email
        }
    }) : [];
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });
       

        if (res.data.success) {
            const toursDoc = {
                title:data.title,
               
                days: parseInt(data.days) ,
                price: parseFloat(data.price) ,
                guide_email: data.guide_email,
                guide_name: data.guide_name,
                guide_pic: data.guide_pic,
                spot_name: data.spot_name,
                max_people: parseInt(data.max_people) ,
                type: data.type,
                tour_plan: data.tour_plan,
                photos:data.photos,
                
                image: res.data.data.display_url

            };

            //title,image,type,price,guide_name,guide_email,guide_pic,tour_plan[{day,description}],max_people,spot_name,days,photos[1,2,3]
            const bookingRes = await axiosSecure.post("/tours", toursDoc);
            console.log(bookingRes.data);
            if (bookingRes.data.insertedId) {
                reset();
                Swal.fire({
                    title: `${data.title}Package adding successfull`,
                    text: " Please visit My Bookings page to manage your bookings.",
                    icon: "success",
                    confirmButtonColor: "#E8604C",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Ok",
                    showCancelButton: false,
                });
            }
        }
        console.log(res.data);
    }

    return (
        <>
            <Helmet>
                <title>SkyTrip | Add Package</title>
            </Helmet>

            <div className="bg-[#F6F6F6] min-h-screen pb-10">
                {/* title,image,type,price,guide_name,guide_email,guide_pic,tour_plan[{day,description}],max_people,spot_name,days,photos[1,2,3] */}
                <div className="mx-auto  lg:max-w-xl sm:text-center  p-10">

                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl "><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-[#E8604C]">Add New Package</span>
                        <br /></h1>
                    <p className="text-sm font-normal text-gray-500  dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero animi nihil necessitatibus libero, quia amet. </p>

                </div>
                <div className="max-w-4xl md:h-[60%] bg-gradient-to-br from-slate-300 via-red-100 to-sky-950 mx-auto space  p-5 md:p-8 lg:p-12 shadow-xl rounded-md">

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex justify-center items-center flex-col md:flex-row  gap-5 mb-5">
                                {/* Title  and spot name*/}
                                <div className="flex-1 max-w-xl">
                                    <label className="label ">
                                        <span className="label-text text-base font-bold">Tour Title</span>

                                    </label>
                                    <input
                                        {...register("title", { required: true })}
                                        type="text"
                                        name="title"

                                        placeholder="Type here" className="input input-bordered input-error w-full py-1"
                                    />
                                </div>

                                {/*spot name*/}
                                <div className="flex-1 max-w-xl">
                                    <label className="label ">
                                        <span className="label-text text-base font-bold">Spot Name</span>

                                    </label>
                                    <input
                                        {...register("spot_name", { required: true })}
                                        type="text"
                                        name="spot_name"
                                        placeholder="Type here" className="input input-bordered input-error w-full "
                                    />
                                </div>
                            </div>

                            {/* title,image,type,price,guide_name,guide_email,guide_pic,tour_plan[{day,description}],max_people,spot_name,days,photos[1,2,3] */}
                            <div className="flex justify-center items-center flex-col md:flex-row  gap-5 mb-5">
                                {/* Days */}
                                <div className="flex-1 max-w-xl">
                                    <label className="label ">
                                        <span className="label-text text-base font-bold">Days</span>

                                    </label>
                                    <input
                                        {...register("days", { required: true })}
                                        type="number"
                                        name="days"
                                        placeholder="Type here" className="input input-bordered input-error w-full py-1"
                                    />
                                </div>

                                {/* Max People */}
                                <div className="flex-1 max-w-xl">
                                    <label className="label ">
                                        <span className="label-text text-base font-bold">Max People</span>

                                    </label>
                                    <input
                                        {...register("max_people", { required: true })}
                                        type="number"
                                        name="max_people"
                                        placeholder="Type here" className="input input-bordered input-error w-full "
                                    />
                                </div>
                            </div>


                            {/* guide name and email  */}
                            <div className="flex justify-between items-center flex-col md:flex-row  gap-5 mb-5" >
                                {/* Guide Name  */}
                                <div className="flex-1 max-w-xl">

                                    <label className="label ">
                                        <span className="label-text text-base font-bold">Guide Name</span>

                                    </label>
                                    <select
                                        // defaultValue={"default"}
                                        {...register("guide_name", { required: true })}
                                        className="select select-error select-bordered w-full ">
                                        <option disabled value={"default"}>Select a Guide</option>

                                        {guidesData?.map((guide, index) => (
                                            <option key={index} value={guide.guide_name}>
                                                {guide.guide_name}
                                            </option>
                                        ))
                                        }
                                    </select>
                                </div>

                                {/* guide email  */}
                                <div className="flex-1 max-w-xl">

                                    <label className="label ">
                                        <span className="label-text text-base font-bold">Guide Email</span>

                                    </label>
                                    <select
                                        // defaultValue={"default"}
                                        {...register("guide_email", { required: true })}
                                        className="select select-bordered select-error w-full  ">
                                        <option disabled value={"default"}>Select Guides Email</option>

                                        {guidesData?.map((guide, index) => (
                                            <option key={index} value={guide.guide_email}>
                                                {guide.guide_email}
                                            </option>
                                        ))
                                        }

                                    </select>
                                </div>
                            </div>
                            <div className="flex-1 ">
                                <label className="label ">
                                    <span className="label-text text-base font-bold">Guide Pic URL</span>

                                </label>
                                <input
                                    {...register("guide_pic", { required: true })}
                                    name="guide_pic"
                                    type="text"
                                    placeholder="Type Img URL" className="input input-error input-bordered w-full "
                                />

                            </div>

                            {/*Price and tourtype  */}
                            <div className="flex justify-between items-center flex-col md:flex-row  gap-5 mb-5" >
                                {/* tour_type  */}
                                <div className="flex-1 w-full">

                                    <label className="label ">
                                        <span className="label-text text-base font-bold">Tour Type</span>

                                    </label>
                                    <select
                                        // defaultValue={"default"}
                                        {...register("type", { required: true })}
                                        // className="select select-bordered w-full max-w-xs"
                                        className="select select-error select-bordered w-full  ">
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

                                {/* price  */}
                                <div className="flex-1 ">
                                    <label className="label ">
                                        <span className="label-text text-base font-bold">Price</span>

                                    </label>
                                    <input
                                        {...register("price", { required: true })}
                                        name="price"
                                        type="number"
                                        placeholder="Type here" className="input input-error input-bordered w-full "
                                    />

                                </div>

                            </div>

                            {/*image,guide_pic,tour_plan[{day,description}],,photos[1,2,3] */}
                            


                            {/* tour plan  */}
                            <div>
                                <label className="label ">
                                    <span className="label-text text-base font-bold">Tour Plan</span>

                                </label>
                                <div >
                                    {new Array(5).fill(null).map((_, i) => (
                                        <div key={i} className="flex gap-1 flex-col max-w-xl mb-6">
                                            <label className="text-sm font-semibold pl-2">Day {i + 1}</label>
                                            <input
                                                type="text" {...register(`tour_plan[${i}].day`, { required: true })} defaultValue={'day 1'} className="input input-error input-bordered w-1/2 " />
                                            <label>Description</label>
                                            <textarea {...register(`tour_plan[${i}].description`, { required: true })}
                                            className="textarea-error textarea textarea-bordered"
                                            ></textarea>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* photos  */}
                            <div>
                                <label className="label-text text-base font-bold ">Photos</label>
                                <div>
                                    {new Array(3).fill(null).map((_, i) => (
                                        <div key={i} className="flex gap-1 flex-col max-w-xl mb-6">
                                            <label className="text-sm font-semibold ">Photo {i + 1}</label>
                                            <input type="text" {...register(`photos[${i}]`, { required: true })} className="input-error input input-bordered" placeholder="Photo url"/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                           


                            


                            <div className="mb-6">
                                <label className="label-text text-base font-bold block">Tour Image</label>
                                <input
                                    {...register("image", { required: true })}
                                    name="image"
                                    type="file"
                                    className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                                />
                            </div>

                            

                            <button type="submit" className="btn w-1/2 border-red-700">Add Package<FaBook />
                            </button>

                          

                        </form>
                    </div>
                </div>
            </div>
            <h2 className="text-3xl text-center">Add Package</h2>
        </>
    );
};

export default AddPackage;