import { FaHome, FaList, FaPlus } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {


    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full h-fit md:w-64 md:min-h-screen bg-blue-300">
                <ul className="menu md:mt-5">
                    <div className="flex flex-row md:flex-col">

                        <li className="md:mt-5"><NavLink to='/dashboard/myTasks'>
                            <FaList className="hidden md:block"></FaList>Manage Tasks</NavLink>
                        </li>
                        <li className="md:mt-5"><NavLink to='/dashboard/addTask'>
                            <FaPlus className="hidden md:block"></FaPlus>Add Task</NavLink>
                        </li>
                        <div className="divider hidden md:block"></div>
                        <li><NavLink to='/'>
                            <FaHome className="hidden md:block"></FaHome> Home</NavLink>
                        </li>
                    </div>

                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;