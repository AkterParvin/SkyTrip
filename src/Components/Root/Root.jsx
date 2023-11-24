import { Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Nav/Nav";
import Banner from "../Pages/Home/Banner/Banner";


const Root = () => {
    return (
        <div>
            <Nav />
            <Banner/>
            <div className="max-w-6xl mx-auto">
                <Outlet />
            </div>
         
       </div>
    );
};

export default Root;