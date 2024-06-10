import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";

const TrainerRoute = ({children}) => {

    const [role, isLoading] = useRole();

    if(isLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(role==='trainer') return children
    return <Navigate to="/dashboard"></Navigate>
};

export default TrainerRoute;