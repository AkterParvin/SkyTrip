import { Outlet } from "react-router-dom";
import SideBar from "../Pages/Shared/SideBar/SideBar";


const Dashboard = () => {
    return (
        <div className="flex  ">
            <div className="w-[280px]"><SideBar /></div>
            <div className="max-w-6xl mx-auto flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;