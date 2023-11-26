import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Shared/Login/Login";
import Signup from "../Components/Pages/Shared/Signup/Signup";
import AllTours from "../Components/Pages/Home/Home/AllTours/AllTours";


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