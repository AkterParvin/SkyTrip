// import { useContext } from "react";
// import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";


const useFindGuide = () => {
    // const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [guides, setGuides] = useState();
    // console.log(guides);
    // useEffect(() => {
    //     axiosSecure.get("/users/guide")
    //         .then(res => {
    //             setGuides(res.data);
    //     })
    // },[axiosSecure])
    useEffect(() => {
        const findGuide = async () => {
            try {
                const response = await axiosSecure.get("/users/guide");
                setGuides(response.data);
            } catch (error) {
                console.log("Error fetching users to find guide", error);
            }
        };
        findGuide();
    },[axiosSecure])
    return [guides]
};

export default useFindGuide;