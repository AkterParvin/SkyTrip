import { Outlet } from "react-router-dom";
import SideBar from "../Pages/Shared/SideBar/SideBar";


const Dashboard = () => {
    return (
        <div className="flex flex-row ">
            {/* <div className="w-[280px]"></div> */}
            <div className="bg-yellow-400 w-64"><SideBar /></div>
            <div className="max-w-6xl mx-auto flex-grow">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;