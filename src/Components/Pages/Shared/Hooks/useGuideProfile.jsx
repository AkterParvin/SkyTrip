/* eslint-disable no-unused-vars */
import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect } from "react";


const useGuideProfile = () => {
    const AxiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(true);


    const [guides, setGuides] = useState([]);
    useEffect(() => {
        AxiosSecure.get(`/guides`)
            .then(res => {
                setLoading(false);
                // console.log(res.data);
                setGuides(res.data);
            })
            .catch(error => {
                setLoading(false);
                console.error("Error fetching data:", error);
            });
    }, [AxiosSecure]);
    // console.log(guides);
    return [guides]
};

export default useGuideProfile;