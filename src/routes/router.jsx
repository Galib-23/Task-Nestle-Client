import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Enterprise from "../Pages/Enterprise";
import Pricing from "../Pages/Pricing";
import Contact from "../Pages/Contact";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import PrivateRoute from "./PrivateRoute";
import Profile from "../DashboardPages/Profile";
import ManageTasks from "../DashboardPages/ManageTasks";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddTask from "../DashboardPages/AddTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "enterprise",
        element: <Enterprise></Enterprise>
    },
    {
        path: "pricing",
        element: <Pricing></Pricing>
    },
    {
        path: "contact",
        element: <Contact></Contact>
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'signUp',
        element: <SignUp></SignUp>
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myProfile',
                element: <Profile></Profile>
            },
            {
                path: 'myTasks',
                element: <ManageTasks></ManageTasks>
            },
            {
                path: 'addTask',
                element: <AddTask></AddTask>
            }
        ]
    }
]);
export default router;