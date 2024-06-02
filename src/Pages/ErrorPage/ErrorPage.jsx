import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="mt-40 space-y-2 text-center text-2xl font-extrabold">
            <h2 className="font-bold text-4xl" >404</h2>
            <p className="pb-4">This page is not found</p>
            <Link to='/' className="border p-1 rounded-lg border-blue-500 text-blue-500">Click here to return Home</Link>
        </div>
    );
};

export default ErrorPage;