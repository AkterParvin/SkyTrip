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
                loader: ({ params }) => fetch(`http://localhost:5000/tours/${params.id}`)
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
        element:<Dashboard/> ,
        children: [
            // Admin Routes 
            {
                path: "adminprofile",
                element: <AdminProfile />

            },
            {
                path: "allusers",
                element: <AllUsers />

            },
            {
                path: "addpackage",
                element: <AddPackage />

            },
            // Guide Routes 
            {
                path: "guideprofile/:guide_email",
                element: <GuideProfile />,
                loader: ({ params }) => fetch(`http://localhost:5000/guides/${params.guide_email}`)

            },
            {
                path: "assignedtours",
                element: <PrivateRoute> <AssignedTours /></PrivateRoute>

            },
            // user routes 
            {
                path: "userprofile",
                element: <UserProfile />

            },
            {
                path: "mywishlist",
                element: <MyWishlist />

            },
            {
                path: "mybookings",
                element: <MyBookings />

            },


        ]
        
    }
])

export default Routes;