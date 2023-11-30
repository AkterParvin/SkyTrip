import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../Pages/Shared/SideBar/SideBar";
import Welcome from "../Pages/Dashboard/Welcome/Welcome";


const Dashboard = () => {
    const location = useLocation();
    return (
        <div className="flex flex-row ">
            {/* <div className="w-[280px]"></div> */}
            <div className="bg-yellow-400 w-64"><SideBar /></div>
            <div className="max-w-6xl mx-auto flex-grow">
                {location.pathname === "/dashboard" && (
                    <Welcome/>
                )}
                <Outlet />
                
            </div>
            
        </div>
    );
};

export default Dashboard;