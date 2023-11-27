import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const BookingForm = () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and get an imgurl 
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });
        if (res.data.success) {
            const bookingDoc = {
                guide_name: data.guide_name,
                type: data.type,
                
                // name,
            }
        }
       
    }

    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                        Get started today
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
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
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="mb-3">
                                <label className="block mb-2 text-sm text-gray-800 font-medium dark:text-yellow-500">Tourist Name</label>
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    name="name"
                                    placeholder="Type here" className="input input-bordered input-error w-full py-1" />

                              
                            </div>
                            <div className="mb-3">
                                <label className="block mb-2 text-sm text-gray-800 font-medium dark:text-yellow-500">Tourist Email</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    name="email"
                                    placeholder="Type here" className="input input-bordered input-error w-full " />

                            </div>

                            <div className="flex justify-between items-center flex-col md:flex-row  gap-5 mb-6" >
                                {/* tour_type  */}
                                <div className="flex-1 max-w-xl">

                                    <label className="label ">
                                        <span className="label-text">Tour Type*</span>

                                    </label>
                                    <select
                                        defaultValue={"default"}
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
                                        defaultValue={"default"}
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
                            <div className=" flex-1 max-w-xl">
                                <label className="label ">
                                    <span className="label-text">Price*</span>

                                </label>
                                <input
                                    {...register("price", { required: true })}
                                    name="price"
                                    type="text"
                                    placeholder="Type here" className="input input-bordered w-full "
                                />

                            </div>

                            <div className="mb-6">

                                <textarea
                                    {...register("recipe", { required: true })}
                                    name="recipe"
                                    className="textarea w-full h-24 md:h-48 lg:h-60 textarea-warning" placeholder="Recipe Details"></textarea>
                            </div>
                            <div className="mb-6">

                                <input
                                    {...register("image", { required: true })}
                                    name="image"
                                    type="file"
                                    className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-md btn-wide
                                 btn-warning text-white
                                  bg-[#b97206]">
                                <span className="flex justify-between items-center gap-2">
                                    <p>Add Item</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 8.0001C12 3.58201 9.98338 0 7.5 0C5.01568 0 3 3.58201 3 8.0001C3 9.92279 4.21201 11.5518 5.90818 12.1953L5.4999 21.9999C5.4999 23.1045 6.39539 24 7.5 24C8.60461 24 9.5001 23.1045 9.5001 21.9999L9.09182 12.1962C10.7892 11.5518 12 9.92279 12 8.0001Z" fill="white" />
                                        <path d="M21 7.2501L20.7501 0H19.5L19.2501 7.2501H18.2499L18 0H16.5L16.2501 7.2501H15.2499L15 0H13.7499L13.5 7.2501C13.5 8.77529 14.4141 10.0818 15.7227 10.668L15.2499 21.9999C15.2499 23.1045 16.1454 24 17.25 24C18.3546 24 19.2501 23.1045 19.2501 21.9999L18.7773 10.668C20.0859 10.0818 21 8.77529 21 7.2501Z" fill="white" />
                                    </svg>

                                </span>

                            </button>

                        </form>
                    </div>
                   
                </div>
            </div>   
        </div>
    );
};

export default BookingForm;