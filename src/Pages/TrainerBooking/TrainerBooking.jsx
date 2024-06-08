import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const TrainerBooking = () => {

    // const {id} = useParams();
    // const axiosSecure = useAxiosSecure();

    // const {data: slot = {} } = useQuery({
        
    //     queryKey: ['slot', id],
    //     queryFn: async() => {
    //     const {data} = await axiosSecure.get(`/details/${id}/slot/${id}`);
    //     return data;
    //     }
    // })

    return (
        <div>
            <h2>booked :</h2>
        </div>
    );
};

export default TrainerBooking;