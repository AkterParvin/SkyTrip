import Lottie from "lottie-react";
import error from "../../../../assets/error.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen ">
            <section className="border-2 bg-gradient-to-tr from-red-50 via-stone-200 to-amber-50 rounded-xl shadow-xl shadow-slate-600 p-16 flex justify-center items-center flex-col">
                <h2 className="text-2xl md:text-5xl my-6 font-bold text-sky-600">Opppsss!!!</h2>
                <Lottie animationData={error} className="h-48 md:h-64"></Lottie> 
                <Link to="/"><button className="btn btn-sm btn-info btn-outline">Go Home</button></Link>
            </section>
           
        </div>
    );
};

export default ErrorPage;