import { IoIosHeart } from "react-icons/io";



const TourCard = ({ tour }) => {

    const { title, image, type, price, _id } = tour;
    

    return (
        <div className='lg:w-[90%] mx-auto'>
            

            <div className="max-w-md bg-transparent bg-slate-100 border shadow-xl   rounded-lg dark:bg-gray-800 dark:border-gray-700 relative">
                <span className="top-[5%] right-[10%] absolute bg-gray-600 p-2  text-xl text-[#E8604C] rounded-full">
                    <IoIosHeart />
                </span>
                <span >
                    <img className="rounded-t-lg h-60 w-full  object-cover" src={image} alt="" />
                </span>
                <div className="p-5">
                    <span >
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </span>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Tour Type: <span className="text-[#E8604C] font-semibold">{type}</span>
                    </p>
                    <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Price: <span className="text-[#E8604C] font-semibold">${price}</span> </p>
                    <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#E8604C] rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                       Explore More
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>
 
        </div>
    );
};

export default TourCard;