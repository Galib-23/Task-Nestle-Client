import { FaHome, FaList, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-300">
                <ul className="menu mt-5">
                    <>
                        <li className=""><NavLink to='/dashboard/myProfile'>
                            <FaUsers></FaUsers>My Profile</NavLink>
                        </li>
                        <li className="mt-5"><NavLink to='/dashboard/myTasks'>
                            <FaList></FaList>Manage Tasks</NavLink>
                        </li>
                        <li className="mt-5"><NavLink to='/dashboard/addTask'>
                            <FaList></FaList>Add Task</NavLink>
                        </li>
                    </>
                    {/* --------------------------- */}
                    <div className="divider"></div>
                    <li><NavLink to='/'>
                        <FaHome></FaHome> Home</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;