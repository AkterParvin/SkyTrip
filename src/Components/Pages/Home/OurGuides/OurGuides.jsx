
import GuideCard from "./GuideCard/GuideCard";
import useGuideProfile from "../../Shared/Hooks/useGuideProfile";


const OurGuides = () => {
 
   


    const [guides] = useGuideProfile();
   
    console.log(guides);
    // const { contact_details, education, guide_email, guide_name, guide_pic, skills, work_experience, _id }
 
    return (
        <div >
            <h2 className="text 3xl">Our </h2>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold bg-[#E8604C] tracking-wider text-gray-100 uppercase rounded-full bg-teal-accent-400">
                        Know Our Guides
                    </p>

                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl "><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-red-400">Better Team</span>
                        <br /> Better Expereince</h1>
                    <p className="text-lg font-normal text-gray-500  dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero animi nihil necessitatibus libero, quia amet. Quaerat id laudantium, accusantium illo exercitationem repellendus voluptates harum.</p>

                </div>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4 ">
                   
                    {
                        guides?.map(person => <GuideCard key={person._id} person={person}>

                        </GuideCard>)
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default OurGuides;