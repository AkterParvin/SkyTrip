import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Shared/Login/Login";
import Signup from "../Components/Pages/Shared/Signup/Signup";
import AllTours from "../Components/Pages/Home/Home/AllTours/AllTours";
import ToursDetails from "../Components/Pages/Home/Home/AllTours/ToursDetails";
import TourType from "../Components/Pages/TourType/TourType";


const Routes = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home/>
            },  
            {
                path: "/alltours",
                element: <AllTours/>
            },  
            {
                path: "/tour/:type",
                element: <TourType/>
            },  
            {
                path: "/tourdetails/:id",
                element: <ToursDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/tours/${params.id}`)
            },  
            {
                path: "/login",
                element: <Login/>
            },  
            {
                path: "/signup",
                element: <Signup/>
            },  
        ]
    },
    {
        
    }
])

export default Routes;