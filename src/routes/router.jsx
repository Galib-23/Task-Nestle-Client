import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Enterprise from "../Pages/Enterprise";
import Pricing from "../Pages/Pricing";
import Contact from "../Pages/Contact";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";

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
    }
]);
export default router;