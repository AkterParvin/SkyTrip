
import { useLoaderData } from "react-router-dom";

const GuideProfile = () => {
    
    // console.log(guides);
    const guide = useLoaderData();
    console.log(guide);
    const { contact_details, education, guide_email, guide_name, guide_pic, skills, work_experience, _id } = guide;

  
    return (
        <div className="py-10 bg-gradient-to-l to-sky-100 via-slate-200 from-[#f2d0ca]">
            <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl "><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-[#E8604C]">Guide Profile</span>
                    <br /></h1>
                <p className="text-sm font-normal text-gray-500  dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero animi nihil necessitatibus libero, quia amet. </p>

            </div>
            {/* guide profile info  */}
            <div className="flex items-start justify-center gap-8 shadow-xl  pt-5 pb-10 ">
                <div className="avatar">
                    <div className="w-48 rounded-xl">
                        <img src={guide_pic} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-700 mt-5 tracking-wider">Guide Name: <span className="text-[#9c3a2f] tracking-tight">{guide_name}</span></h2>
                    <h2 className="text-lg font-semibold text-gray-700 my-2 tracking-wider">Guide Email: <span className="text-[#9c3a2f] tracking-tight">{guide_email}</span></h2>
                    <h2 className="text-base font-semibold text-gray-700 underline tracking-wider">Contact Details:</h2>
                    <span className="flex items-center gap-2">
                        <p className="text-[#365eaf] text-sm">Phone:</p>
                        <p className="text-[#9c3a2f]  text-sm">{contact_details.phone}</p>
                    </span>
                    <span className="flex items-center gap-2">
                        <p className="text-[#365eaf] text-sm">Address:</p>
                        <p className="text-[#9c3a2f]  text-sm">{contact_details.address}.</p>
                    </span>
                    <span className="flex items-center gap-2">
                        <p className="text-[#365eaf] text-sm">Website:</p>
                        <p className="text-[#9c3a2f]  text-sm">{contact_details.website}</p>
                    </span>

                </div>

            </div>
            <div className="mb-12 py-5 flex items-start justify-between ">
                <div className="h-full  w-[60%] ">
                    <div className="max-w-4xl   mx-auto flex flex-col justify-start pl-5">
                        {/* <div className="flex items-start justify-start gap-8 px-12  py-5 ">
                            <div className="avatar">
                                <div className="w-48 rounded-xl">
                                    <img src={guide_pic} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-700 mt-5 tracking-wider">Guide Name: <span className="text-[#9c3a2f] tracking-tight">{guide_name}</span></h2>
                                <h2 className="text-lg font-semibold text-gray-700 my-2 tracking-wider">Guide Email: <span className="text-[#9c3a2f] tracking-tight">{guide_email}</span></h2>
                                <h2 className="text-base font-semibold text-gray-700 underline tracking-wider">Contact Details:</h2>
                                <span className="flex items-center gap-2">
                                    <p className="text-[#365eaf] text-sm">Phone:</p>
                                    <p className="text-[#9c3a2f]  text-sm">{contact_details.phone}</p>
                                </span>
                                <span className="flex items-center gap-2">
                                    <p className="text-[#365eaf] text-sm">Address:</p>
                                    <p className="text-[#9c3a2f]  text-sm">{contact_details.address}.</p>
                                </span>
                                <span className="flex items-center gap-2">
                                    <p className="text-[#365eaf] text-sm">Website:</p>
                                    <p className="text-[#9c3a2f]  text-sm">{contact_details.website}</p>
                                </span>

                            </div>

                        </div> */}

                        <div className="pl-16 border rounded-xl shadow-xl border-gray-300 my-5 bg-gray-200/40">
                            <div className="flex flex-col my-5">
                                <h2 className="text-2xl font-bold text-gray-700  italic tracking-wider underline mb-5">Educational Background: </h2>

                                <span className="flex items-start gap-2 text-lg font-semibold mb-2">
                                    <p className="text-[#365eaf] ">Degree:</p>
                                    <p className="text-[#9c3a2f]  ">{education.degree}</p>
                                </span>
                                <span className="flex items-start gap-2 text-lg font-semibold mb-2">
                                    <p className="text-[#365eaf] ">Intitution:</p>
                                    <p className="text-[#9c3a2f]  ">{education.school}</p>
                                </span>
                                <span className="flex items-start gap-2 text-lg font-semibold mb-2">
                                    <p className="text-[#365eaf] ">Graduation Year:</p>
                                    <p className="text-[#9c3a2f]  ">{education.graduation_year}</p>
                                </span>

                            </div>
                            <div className="flex flex-col my-5">
                                <h2 className="text-2xl font-bold text-gray-700   tracking-wider underline mb-5 italic">Work Experience: </h2>

                                {
                                    work_experience.map(item => <div key={item.index}>

                                        <span className="flex items-center gap-2 text-lg font-semibold mb-2">
                                            <p className="text-[#274686]">Company Name:</p>
                                            <p className="text-[#9c3a2f]  ">{item.company}</p>
                                        </span>
                                        <span className="flex items-center gap-2 text-lg font-semibold mb-2">
                                            <p className="text-[#274686]">Previous Position:</p>
                                            <p className="text-[#9c3a2f]  ">{item.position}</p>
                                        </span>
                                        <span className="flex items-center gap-2 text-base  font-semibold mb-2">
                                            <p className="text-[#274686] ">Start Date:</p>
                                            <p className="text-[#9c3a2f]  ">{item.start_date}</p>
                                        </span>
                                        <span className="flex items-center gap-2 text-base font-semibold mb-2">
                                            <p className="text-[#274686] ">End Date:</p>
                                            <p className="text-[#9c3a2f]  ">{item.end_date}</p>
                                        </span>
                                        <span className="flex items-start gap-2 text-base font-semibold mb-2">
                                            <p className="text-[#274686] ">Responsibilities:</p>
                                            <p className="text-[#9c3a2f]  ">{item.description}</p>
                                        </span>
                                    </div>)
                                }

                                <span className="flex items-start gap-2 text-base font-semibold mb-2">
                                    <p className="text-[#274686] ">Skills:</p>
                                    <p className="text-[#9c3a2f]  ">{skills[0]}, {skills[1]}, {skills[2]}, {skills[3]}, {skills[4]}</p>
                                </span>


                            </div>
                        </div>
                    </div>
                    {/* user comment   */}
                    <div className="flex bg-[#2F4858] flex-col   p-8 shadow-sm rounded-xl lg:p-10 dark:bg-gray-900 dark:text-gray-100 max-w-3xl   mx-auto">
                        <div className="flex flex-col items-center w-[80%] mx-auto">
                            <h2 className="text-3xl font-semibold text-center text-white">Tourist opinion matters!</h2>
                            <div className="flex flex-col items-center py-6 space-y-3 ">
                                <span className="text-center text-white">How was your experience?</span>
                                <div className="flex space-x-3 text-[#cf4e40]">
                                    <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500 ">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                                <button type="button" className="py-3 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400 bg-gray-900 text-white">Leave feedback</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400 text-white">Maybe later</a>
                        </div>
                    </div>

                </div>
                <div className="h-full  w-[40%]">
                    <div className="w-full max-w-xl xl:px-8">
                        <div className="bg-white rounded shadow-2xl p-7 sm:p-6 my-5 ">
                            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                Guide Profile Information
                            </h3>
                            <form>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                    
                                        className="inline-block mb-1 font-bold text-blue-800"
                                    >
                                        First name
                                    </label>
                                    <input
                                        placeholder="John"
                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        name="name"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        className="inline-block mb-1 font-bold text-blue-800"
                                    >
                                       Email
                                    </label>
                                    <input
                                     
                                        required
                                        type="email"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        name="email"
                                        placeholder="john.doe@example.org"
                                    />
                                </div>

                                <div className="mb-1 sm:mb-2 flex items-center justify-between gap-1">
                                    
                                    <div>
                                        <label
                                        htmlFor="email"
                                            className="inline-block mb-1 font-medium text-blue-800"
                                    >
                                        Phone
                                    </label>
                                        <input

                                            required
                                            type="number"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            placeholder="2353445"
                                            name="phone"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="inline-block mb-1 font-medium  text-blue-800"
                                    >
                                        Website
                                    </label>
                                        <input

                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="website"
                                            placeholder="www.abd.com"
                                        />
                                    </div>
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        className="inline-block mb-1 font-bold text-blue-800"
                                    >
                                       Address
                                    </label>
                                    <textarea

                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        name="address"
                                        placeholder="Full Address"
                                    />
                                </div>

                                <div className="mb-1 sm:mb-2">
                                    <label
                                        className="inline-block mb-1 font-bold text-blue-800"
                                    >
                                    Education
                                    </label>
                                    <div className="mb-1 sm:mb-2 flex items-center justify-between gap-1">

                                        <div>
                                            <label
                                               
                                                className="inline-block mb-1 font-medium text-xs text-blue-800"
                                            >
                                                Degree Name
                                            </label>
                                            <input

                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                placeholder="Bachelor of Arts"
                                                name="degree"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className="inline-block mb-1 text-xs font-medium text-blue-800"
                                            >
                                                Graduation Year
                                            </label>
                                            <input

                                                required
                                                type="number"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="email"
                                                name="graduation_year"
                                                placeholder="2018"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        className="inline-block mb-1 font-bold text-blue-800 "
                                    >
                                        Institution
                                    </label>
                                    <input

                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        name="school"
                                        placeholder="Tourism University"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        className="inline-block mb-1 font-medium text-blue-800"
                                    >
                                        Work Experience
                                    </label>
                                    <div className="mb-1 sm:mb-2 flex items-center justify-between gap-1">

                                        <div>
                                            <label

                                                className="inline-block mb-1 font-medium text-xs text-blue-800"
                                            >
                                               Company Name
                                            </label>
                                            <input

                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                placeholder="Abd Ltd."
                                                name="company_name"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className="inline-block mb-1 text-xs font-medium text-blue-800"
                                            >
                                               Position
                                            </label>
                                            <input

                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                name="company_name"
                                                placeholder="Tour Guide"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-1 sm:mb-2 flex items-center justify-between gap-1">

                                        <div>
                                            <label

                                                className="inline-block mb-1 font-medium text-xs text-blue-800"
                                            >
                                                Start Date
                                            </label>
                                            <input

                                                required
                                                type="date"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                placeholder="Abd Ltd."
                                                name="start_date"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className="inline-block mb-1 text-xs font-medium text-blue-800"
                                            >
                                                End Date
                                            </label>
                                            <input

                                                required
                                                type="date"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                name="end_date"
                                               
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        className="inline-block mb-1 font-medium text-blue-800"
                                    >
                                        Responsibilities
                                    </label>
                                    <textarea

                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        name="description"
                                        placeholder="job description"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        className="inline-block mb-1 font-bold text-blue-800"
                                    >
                                        Skills
                                    </label>
                                    <input

                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        name="description"
                                        placeholder="skills"
                                    />
                                </div>
                                <div className="mt-3 mb-2 sm:mb-4">
                                    <button
                                        type="submit"
                                        className="inline-flex bg-blue-300 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    >
                                        Submit Profile Info
                                    </button>
                                </div>
                                <p className="text-xs text-gray-600 sm:text-sm">
                                    We respect your privacy. Unsubscribe at any time.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="max-w-4xl   mx-auto flex flex-col justify-start">
                <div className="flex items-start justify-start gap-8 px-12  py-5 ">
                    <div className="avatar">
                        <div className="w-48 rounded-xl">
                            <img src={guide_pic} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-gray-700 mt-5 tracking-wider">Guide Name: <span className="text-[#9c3a2f] tracking-tight">{guide_name}</span></h2>
                        <h2 className="text-lg font-semibold text-gray-700 my-2 tracking-wider">Guide Email: <span className="text-[#9c3a2f] tracking-tight">{guide_email}</span></h2>
                        <h2 className="text-base font-semibold text-gray-700 underline tracking-wider">Contact Details:</h2>
                        <span className="flex items-center gap-2">
                            <p className="text-[#365eaf] text-sm">Phone:</p>
                            <p className="text-[#9c3a2f]  text-sm">{contact_details.phone}</p>
                        </span>
                        <span className="flex items-center gap-2">
                            <p className="text-[#365eaf] text-sm">Address:</p>
                            <p className="text-[#9c3a2f]  text-sm">{contact_details.address}.</p>
                        </span>
                        <span className="flex items-center gap-2">
                            <p className="text-[#365eaf] text-sm">Website:</p>
                            <p className="text-[#9c3a2f]  text-sm">{contact_details.website}</p>
                        </span>

                    </div>
                    
                </div>

                <div className="px-12 border rounded-xl shadow-xl border-gray-300 my-5 bg-gray-200/40">
                    <div className="flex flex-col my-5">
                        <h2 className="text-2xl font-bold text-gray-700  italic tracking-wider underline mb-5">Educational Background: </h2>
                        
                        <span className="flex items-center gap-2 text-xl font-semibold mb-2">
                            <p className="text-[#365eaf] ">Degree:</p>
                            <p className="text-[#9c3a2f]  ">{education.degree}</p>
                        </span>
                        <span className="flex items-center gap-2 text-xl font-semibold mb-2">
                            <p className="text-[#365eaf] ">Intitution:</p>
                            <p className="text-[#9c3a2f]  ">{education.school}</p>
                        </span>
                        <span className="flex items-center gap-2 text-xl font-semibold mb-2">
                            <p className="text-[#365eaf] ">Graduation Year:</p>
                            <p className="text-[#9c3a2f]  ">{education.graduation_year}</p>
                        </span>

                    </div>
                    <div className="flex flex-col my-5">
                        <h2 className="text-2xl font-bold text-gray-700   tracking-wider underline mb-5 italic">Work Experience: </h2>

                        {
                            work_experience.map(item => <div key={item.index}>
                               
                                <span className="flex items-center gap-2 text-xl font-semibold mb-2">
                                    <p className="text-[#274686]">Company Name:</p>
                                    <p className="text-[#9c3a2f]  ">{item.company}</p>
                                </span>
                                <span className="flex items-center gap-2 text-lg font-semibold mb-2">
                                    <p className="text-[#274686]">Previous Position:</p>
                                    <p className="text-[#9c3a2f]  ">{item.position}</p>
                                </span>
                                <span className="flex items-center gap-2 text-base  font-semibold mb-2">
                                    <p className="text-[#274686] ">Start Date:</p>
                                    <p className="text-[#9c3a2f]  ">{item.start_date}</p>
                                </span>
                                <span className="flex items-center gap-2 text-base font-semibold mb-2">
                                    <p className="text-[#274686] ">End Date:</p>
                                    <p className="text-[#9c3a2f]  ">{item.end_date}</p>
                                </span>
                                <span className="flex items-start gap-2 text-base font-semibold mb-2">
                                    <p className="text-[#274686] ">Responsibilities:</p>
                                    <p className="text-[#9c3a2f]  ">{item.description}</p>
                                </span>
                            </div>)
                        }
                        
                        <span className="flex items-start gap-2 text-base font-semibold mb-2">
                            <p className="text-[#274686] ">Skills:</p>
                            <p className="text-[#9c3a2f]  ">{skills[0]}, {skills[1]}, {skills[2]}, {skills[3]}, {skills[4]}</p>
                        </span>
                       

                    </div>
                </div>
            </div> */}


            {/* user comment   */}
            {/* <div className="flex bg-[#2F4858] flex-col  p-8 shadow-sm rounded-xl lg:p-10 dark:bg-gray-900 dark:text-gray-100 max-w-3xl   mx-auto">
                <div className="flex flex-col items-center w-[80%] mx-auto">
                    <h2 className="text-3xl font-semibold text-center text-white">Tourist opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3 ">
                        <span className="text-center text-white">How was your experience?</span>
                        <div className="flex space-x-3 text-[#cf4e40]">
                            <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500 ">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                        <button type="button" className="py-3 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400 bg-gray-900 text-white">Leave feedback</button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400 text-white">Maybe later</a>
                </div>
            </div> */}

        </div>
    );
};

export default GuideProfile;


