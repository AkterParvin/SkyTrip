import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Shared/Login/Login";


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
                path: "/login",
                element: <Login/>
            },  
            {
                path: "/Signup",
                element: <Home/>
            },  
        ]
    },
    {
        
    }
])

export default Routes;