import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useTours = (type, showAll) => {
    const axiosPublic = useAxiosPublic();

    const { data: tours = [],refetch,isPending:loading } = useQuery({
        queryKey: ['tours'],
        queryFn: async () => {
            const response = await axiosPublic.get("/tours");
            return response.data;
       } 
    })

    const filteredTour = showAll ? tours :
        tours.filter((tour) => tour.type === type);
    return [tours, filteredTour, refetch, loading];
};

export default useTours;