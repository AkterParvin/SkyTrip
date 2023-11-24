import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const { googleSignup, loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    console.log("state in the location from login pg", location.state);



    const handlesubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user);
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                if (loggedUser) {
                    Swal.fire(
                        'Login Successfull',
                        'Please proceed to the page',
                    )
                    form.reset();
                    navigate(from, { replace: true });
                }

            })
            .catch(error => {
                console.log(error.message);
            })
                // Swal.fire(
                //     'Login Successfull',
                //     'Please proceed to the page',

                // )
                // navigate(location?.state ? location.state : '/');

            //     axios.post('http://localhost:5000/jwt',
            //         user,
            //         { withCredentials: true })
            //         .then(res => {
            //             console.log(res.data);
            //         })
            // })
            // .catch(error => {
            //     console.log(error.message);
            //     setError(error.message);
            // })


    }

    const handlGoogleLogin = () => {
        googleSignup();
        navigate(location?.state ? location.state : '/');

    }
    return (
        <div>
            <div className='h-full mb-10'>
                <div className=" relative  ">
                    <div className="text-2xl text-center font-bold my-5 md:my-8 ">
                        Login to your account !
                    </div>
                    <div className="absolute bg-cover w-full h-full overflow-hidden -z-10 inset-0" >
                        <img src="https://i.imgur.com/f0vtEig.png" alt="" />

                    </div>

                    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
                        <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: "url('https://i.imgur.com/meeoYwp.jpg')" }}>

                        </div>

                        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 bg-stone-600/30">
                            <div className="flex justify-center items-center hover:rounded-lg mx-auto hover:bg-[#e3bc9a]/40 hover:text-gray-200 w-[40%]" >
                                <img className="w-auto h-14 " src="logo.png" alt="" />

                            </div>

                            <p className="mt-3 text-xl text-center font-semibold text-black dark:text-gray-200">
                                Welcome back !
                            </p>

                            <button onClick={handlGoogleLogin} className="flex items-center justify-center gap-3 mt-4 text-white transition-colors duration-300 transform border rounded-lg bg-zinc-800/50 border-gray-700 dark:text-gray-200 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-600 w-full">

                                <p className="text-xl" >
                                    <FcGoogle></FcGoogle>
                                </p>
                                <span className="  py-3 font-bold ">Login with Google</span>
                            </button>

                            <div className="flex items-center justify-between mt-4">
                                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login with email</a>

                                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                            </div>

                            <form onSubmit={handlesubmit}>
                                {/* {
                                    loginError && <p className="text-red-700 text-md font-bold mt-2">{loginError}</p>
                                } */}

                                <div className="mt-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder='Email'
                                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" />
                                </div>

                                <div className="mt-4">
                                    <div className="flex justify-between">
                                        <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                                        <a href="#" className="text-xs text-gray-600 dark:text-gray-300 hover:underline">Forget Password?</a>
                                    </div>

                                    <input
                                        required
                                        type="password"
                                        name="password"
                                        placeholder='Password'
                                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" />
                                </div>

                                <div className="mt-6">
                                    <input type="submit" value="Login with Email" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" />

                                </div>
                            </form>

                            <div className="flex items-center justify-center text-center mt-4">


                                <p className="text-sm  uppercase text-zinc-800 ">Already have an account?? <br /> go to
                                    <Link to="/signup" className='hover:underline font-semibold text-blue-600'> Sign Up Page</Link> </p>


                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div>
    );
};

export default Login;