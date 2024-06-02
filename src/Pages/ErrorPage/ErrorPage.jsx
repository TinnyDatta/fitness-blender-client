import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-[#fff6f6] max-h-screen">
        <div className="mt-40 space-y-2 text-center text-2xl">
            <h2 className=" text-8xl  " >404</h2>
            <p className="pb-4">This page is not found</p>
            <Link to='/' className="border p-1 rounded-lg  text-[#CD5C5C]">Click here to return Home</Link>
        </div>
        </div>
    );
};

export default ErrorPage;