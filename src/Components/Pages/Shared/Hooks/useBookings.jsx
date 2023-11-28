import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// import Lottie from "lottie-react";
// import load from '../../../../assets/loading.json';

const useBookings = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: bookings = {}, refetch, isPending :loading } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/bookings?email=${user.email}`)
            return result.data;
        }, 
    })
    // if (loading) {<p>Please</p>
    //     // return <div className="h-screen flex justify-center items-center"><Lottie
    //     //     animationData={load} className="h-48 md:h-64"></Lottie></div>
    // }
    return [bookings,refetch,loading]
};

export default useBookings;