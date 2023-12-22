import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                            navigate('/');
                            Swal.fire({
                                title: "Login Successful!",
                                text: "You are now successfully logged in!",
                                icon: "success"
                            });
                    })
            }).catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="flex items-center justify-center">
                <button onClick={handleGoogleSignIn} className="btn w-fit text-center">
                    <FaGoogle></FaGoogle>
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;