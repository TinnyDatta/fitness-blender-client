import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const AppliedTrainerDetails = () => {
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();

    const {data: appliedDetails = []} = useQuery({
        queryKey: ['appliedDetails'],
        queryFn: async() => {
        const {data} = await axiosSecure.get(`/dashboard/applied-trainer/details/${id}`);
        return data;
        }
    })

    return (
        <div>
            <p className="text-4xl my-6 text-[#8A3324] text-center">Know details about - {appliedDetails.name} </p>
            <section className="bg-green-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		
        <h1 className="text-3xl my-4 font-bold leading-none sm:text-xl"> Name: {appliedDetails.name}
		</h1>
		<h1 className="text-3xl font-bold leading-none sm:text-xl"> Skill: {appliedDetails.skill}
		</h1>
		<h1 className="text-3xl my-4 font-bold leading-none sm:text-xl"> Time: {appliedDetails.availableTime} PM
		</h1>
		<h1 className="text-3xl font-bold leading-none sm:text-xl"> Day: {appliedDetails.day}</h1>
		<h1 className="text-3xl my-4 font-bold leading-none sm:text-xl"> Age: {appliedDetails.age}</h1>
		<h1 className="text-3xl font-bold leading-none sm:text-xl"> Email: {appliedDetails.email}
		</h1>
		
	</div>
</section>
        </div>
    );
};

export default AppliedTrainerDetails;