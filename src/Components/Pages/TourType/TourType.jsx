/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useTours from "../Shared/Hooks/useTours";
import TourCard from "../Home/Home/AllTours/TourCard";


const TourType = () => {
    const type  = useParams();
    console.log(type);
    const showAll = true
    const [, filteredTour, refetch, loading] = useTours(type, showAll);
    console.log(filteredTour);

    return (
        <>
       
        <div className="grid grid-cols-2 gap-5 max-w-3xl">
            {
                filteredTour.map(tour => <TourCard key={tour._id}
                    tour={tour}></TourCard>)
            }
        </div>
        </>
    );
};

export default TourType;