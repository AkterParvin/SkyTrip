import { useContext } from "react";
// import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useWishlist = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ["wishlist", user?.email],
        queryFn: async () => {
           const result=await axiosSecure.get(`/wishlist?email=${user.email}`)
            return result.data;
       }, 
    })
    return [wishlist, refetch];
};

export default useWishlist;