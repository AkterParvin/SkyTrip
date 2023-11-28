/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import Lottie from "lottie-react";
import load from '../../../../assets/loading.json';


const useTours = (type, showAll) => {
    const typeName = type && type.type;
    // console.log(typeName)
    const axiosPublic = useAxiosPublic();
    const { data: tours = [],refetch,isPending:loading } = useQuery({
        queryKey: ['tours'],
        queryFn: async () => {
            const response = await axiosPublic.get("/tours");
            return response.data;
       } 
    })

    // const filteredTour =tours.filter((tour) => tour.type == type);
    const filteredTour = typeName? tours.filter((tour) => tour.type === typeName)
        : tours;
    // if (loading) {
    //     return <div className="h-screen flex justify-center items-center"><Lottie
    //         animationData={load} className="h-48 md:h-64"></Lottie></div>
    // }
    return [tours, filteredTour, refetch, loading];
};

export default useTours;