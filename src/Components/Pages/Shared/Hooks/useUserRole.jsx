import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


const useUserRole = () => {
    const { user ,loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [isAdmin, setAdmin] = useState(false);
    const [isGuide, setGuide] = useState(false);
    const [isRoleLoading, setRoleLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const { data: userRole = [], isLoading:roleIsLoading } = useQuery({
        queryKey: ["userRole", user?.email],
        enabled:!loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/role/${user.email}`)
            // console.log(response.data.role);
            return response.data?.role;
        },     
    });
    useEffect(() => {
        if (!roleIsLoading) {
            if (userRole === "admin") {
                setAdmin(true);
                setGuide(false);
            } else if (userRole === "guide") {
                setAdmin(false);
                setGuide(true);
            }
            setRoleLoading(false); 
        }
    }, [userRole, roleIsLoading]);
    useEffect(() => {
        // Update initial loading state after the initial data load is complete
        setIsLoading(roleIsLoading);
    }, [roleIsLoading])
    return [isAdmin, isGuide, isRoleLoading,isLoading];
};

export default useUserRole;