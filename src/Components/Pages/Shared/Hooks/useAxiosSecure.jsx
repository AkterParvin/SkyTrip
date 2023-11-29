/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";



const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})
const useAxiosSecure = () => {
    //request interceptor to add authorization header for every secure call to the api

    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem("SkyTrip-Access-Token");
        console.log("Operation stopped by interceptors");
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        //Do something with request error
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log("status error in the interceptor", status)
        if (status === 401 || status === 403) {
            await logOut();
            navigate("/login");
        }
        return Promise.reject(error);

    })
    return axiosSecure;
};

export default useAxiosSecure;