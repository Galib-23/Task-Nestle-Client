import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {
            Swal.fire({
                title: "Logged Out!",
                icon: "success"
              });
        })
    }


    const navLinks = <>
        <li className="ml-2 font-semibold"><NavLink to='/'>Home</NavLink></li>
        <li className="ml-2 font-semibold"><NavLink to='/enterprise'>Enterprise</NavLink></li>
        <li className="ml-2 font-semibold"><NavLink to='/pricing'>Pricing</NavLink></li>
        <li className="ml-2 font-semibold"><NavLink to='/contact'>Contact Sales</NavLink></li>
    </>
    return (
        <div className="navbar bg-blue-400 bg-opacity-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Task Nestle</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                    <div className="flex gap-5 items-center">
                        <Link to='/dashboard/myTasks'><button className="btn btn-accent btn-sm rounded-3xl">Dashboard</button></Link>
                        <button onClick={handleLogOut} className="btn h-fit w-fit btn-outline btn-sm text-red-600">Logout</button>
                    </div>
                    :
                    <Link to='/login'><button className="btn btn-ghost text-yellow-500">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;