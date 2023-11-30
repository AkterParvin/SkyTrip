import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Shared/Login/Login";
import Signup from "../Components/Pages/Shared/Signup/Signup";
import AllTours from "../Components/Pages/Home/Home/AllTours/AllTours";
import ToursDetails from "../Components/Pages/Home/Home/AllTours/ToursDetails";
import TourType from "../Components/Pages/TourType/TourType";
import ErrorPage from "../Components/Pages/Shared/ErrorPage/ErrorPage";
import MyWishlist from "../Components/Pages/Shared/MyWishlist/MyWishlist";
import Dashboard from "../Components/Root/Dashboard";
import MyBookings from "../Components/Pages/Dashboard/MyBookings/MyBookings";
import UserProfile from "../Components/Pages/Dashboard/UserHome/UserProfile";
import AdminProfile from "../Components/Pages/Dashboard/AdminHome/AdminProfile";
import AllUsers from "../Components/Pages/Dashboard/AllUsers/AllUsers";
import AddPackage from "../Components/Pages/Dashboard/AddPackage/AddPackage";
import GuideProfile from "../Components/Pages/Dashboard/GuideHome/GuideProfile";
import AssignedTours from "../Components/Pages/Dashboard/AssignedTours/AssignedTours";
import PrivateRoute from "../Routes/PrivateRoute";
import GuideRoute from "./GuideRoute";
import AdminRoute from "./AdminRoute";

const Routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/alltours",
                element: <AllTours />
            },
            {
                path: "/tour/:type",
                element: <TourType />
            },
            {
                path: "/tourdetails/:id",
                element: <ToursDetails />,
                loader: ({ params }) => fetch(`https://skytrip-server.vercel.app/tours/${params.id}`)
            },

            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
        ]
    },
    {
        path: "/dashboard",
        // errorElement:<ErrorPage/>,
        element: <Dashboard />,
        children: [
            // Admin Routes 
            {
                path: "adminprofile",
                element: <AdminRoute><AdminProfile /></AdminRoute> 

            },
            {
                path: "allusers",
                element: <AdminRoute> <AllUsers /></AdminRoute>

            },
            {
                path: "addpackage",
                element: <AdminRoute> <AddPackage /></AdminRoute>

            },
            // Guide Routes 
            {
                path: "guideprofile/:guide_email",
                element: <PrivateRoute>  <GuideProfile /></PrivateRoute> ,
                loader: ({ params }) => fetch(`https://skytrip-server.vercel.app/guides/${params.guide_email}`)

            },
            {
                path: "assignedtours",
                element:<GuideRoute><AssignedTours /></GuideRoute> 

            },
            // user routes 
            {
                path: "userprofile",
                element: <PrivateRoute>  <UserProfile /></PrivateRoute> 

            },
            {
                path: "mywishlist",
                element: <PrivateRoute>  <MyWishlist /></PrivateRoute> 

            },
            {
                path: "mybookings",
                element: <PrivateRoute>  <MyBookings /></PrivateRoute> 

            },


        ]

    }
])

export default Routes;