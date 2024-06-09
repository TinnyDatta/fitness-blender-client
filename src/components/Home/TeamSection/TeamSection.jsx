import { useQuery } from "@tanstack/react-query";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TeamSection = () => {

    const axiosSecure = useAxiosSecure();

    const {data: trainers = []} = useQuery({
        queryKey: ['trainers'],
        queryFn: async() => {
        const {data} = await axiosSecure.get('/trainers');
        return data;
        }
    })

    return (
        <>
        <div>
        <h2 className="text-[#CD5C5C] text-center my-2 text-xl">Team</h2>
            <p className="text-4xl text-[#8A3324] text-center">Trainers of FitnessBlender</p>
            <p className="text-center text-lg mt-3 mb-10">They are the most expert and experienced trainers <br /> who are dedicated to keep you fit by training you in a great way</p>
        </div>
        <div className="my-10 max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                trainers.map(trainer => (
                    <div key={trainer._id} className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={trainer.profileImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl tracking-wide">{trainer.trainerName}</h2>
			<p className="dark:text-gray-800">

            {trainer.availableSlots.map((slot, index) => (
          <li key={index}>{slot.partOfTheDay} : {slot.time}</li>
        ))}

            </p>
            <p className="font-semibold">Experience : {trainer.yearsOfExperience} Years</p>
            <div className="grid grid-cols-3 pt-4 ">
        <p href={trainer.socialIcons.facebook} target="" rel=""><FaFacebook className="w-6 h-6"/></p>
        <p href={trainer.socialIcons.instagram} target="" rel=""><FaInstagram className="w-6 h-6"/></p>
        <p href={trainer.socialIcons.twitter} target="" rel=""><FaTwitter className="w-6 h-6"/></p>
      </div>
		</div>
		<Link to={`/details/${trainer._id}`}>
        <button className="btn bg-[#CD5C5C] text-white border-0 border-b-4 border-b-black">Know More</button>
        </Link>
	</div>
</div>
                ))
            }
            </div>
        </div>
        </>
    );
};

export default TeamSection;