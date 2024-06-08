import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const TrainerDetails = () => {
   const {id} = useParams();
    const axiosSecure = useAxiosSecure();

    const {data: details = {} } = useQuery({
        
        queryKey: ['details', id],
        queryFn: async() => {
        const {data} = await axiosSecure.get(`/details/${id}`);
        return data;
        }
    })
    
   

    return (
        <div>
            <Helmet>
                <title>Trainer Details || FitnessBlender</title>
            </Helmet>
            <div className="text-center">
            <Link to='/becomeTrainer'>
          <button  className="btn bg-[#CD5C5C] text-white border-0 border-b-4 border-b-black text-xl md:w-80" >Become a Trainer</button>
          </Link>
            </div>
            <section className="bg-[#CD5C5C] text-white my-10 rounded-xl">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-2xl font-bold leading-none sm:text-2xl">{details.trainerName}
			</h1>
            <p className="text-xl font-medium py-1">Expert at : {details.expertise}</p>
            <p className="text-xl font-medium py-1">{details.yearsOfExperience} Years of Experience</p>
			<p className="my-2 text-lg sm:mb-12">{details.details}
			</p>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={details.profileImage} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
       {/* available slot */}
       <div>
       <p className="text-4xl text-[#8A3324] text-center">***Availability of {details.trainerName}***</p>
       
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
      {details?.availableSlots?.map((slot) => (
          <div key={slot.id}>
            <Link to={`/details/${id}/slot/${slot.id}`}>
          <button  className="btn bg-[#CD5C5C] text-white border-0 border-b-4 border-b-black text-xl md:w-80" >{slot.partOfTheDay} : {slot.time}</button>
          </Link>
          </div>
          

        ))}
      </div>
      {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
      {details?.availableSlots?.map((detail, index) => (
          
          <Link to='/booking' key={index}>
          <button  className="btn bg-[#CD5C5C] text-white border-0 border-b-4 border-b-black text-xl md:w-80" >{detail.partOfTheDay} : {detail.time}</button>
          </Link>

        ))}
      </div> */}

       </div>
        </div>
    );
};

export default TrainerDetails;