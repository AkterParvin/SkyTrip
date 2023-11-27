import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useWishlist = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ["wishlist", user?.email],
        queryFn: async () => {
           const result=await axiosPublic.get(`/wishlist?email=${user.email}`)
            return result.data;
       }, 
    })
    return [wishlist, refetch];
};

export default useWishlist;