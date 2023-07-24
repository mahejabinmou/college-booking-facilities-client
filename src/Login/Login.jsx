
import { FaGoogle,FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GithubAuthProvider,getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.config";


const Login = () => {
    const { loginUser, googleSignIn } = useContext(AuthContext);
    const auth = getAuth(app);
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page location", location);
    const from = location.state?.from?.pathname || "/";
    const [user, setUser] = useState(null);
    
    



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleLogin = (event) => {
        event.preventDefault();



        if ((email, password)) {
            loginUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    navigate(from, { replace: true });
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };


const handleSignInGoogle=()=>{
    googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {

            console.log('error', error.message)
        })
}

const handleSignInGit=()=>{
    signInWithPopup(auth, githubProvider)
            .then(result => {
                 const loggedUser = user.result;
                console.log(loggedUser);
                setUser(loggedUser);
            })

            .catch(error => {
                console.log(error);
            })
}


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  lg:flex-row">
                <div className="w-1/2 p-4">
                    <img src="https://i.ibb.co/cDhy0M6/login.png" className="rounded-xl w-[400px]" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-success">Login</h1>
                        <form action="" className="flex-col items-center text-center">

                            <div>
                                <input

                                    onChange={(e) => setEmail(e.target.value)}
                                    className="email p-3 m-2 border "
                                    type="email"
                                    placeholder="enter your email"
                                />
                            </div>
                            <div>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="password p-3 m-2  border "
                                    type="password"
                                    placeholder="enter your password"
                                />
                            </div>
                            <button
                                onClick={handleLogin}
                                className="btn btn-success   w-75 p-2 mt-3"
                            >
                                Login
                            </button>

                            <div className="p-2">
                                < p className='my-4 text-center'>New to here <Link
                                    to="/signup" className='text-success font-bold'>
                                    Sign Up</Link></p>
                            </div>
                        </form>


                        <div className="divider text-success">OR</div>
                        <div className="text-center">
                            <button
                                onClick={handleSignInGoogle}
                                className="btn btn-success btn-outline btn-circle w-[75px] mr-4 mt-3">
                                <FaGoogle />
                            </button>

                            <button onClick={handleSignInGit}
                    className="btn btn-success btn-outline btn-circle w-[75px] mr-4 mt-3">
                    <FaGithub />
                </button>
                            

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;