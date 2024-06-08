import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const AllClasses = () => {

    const axiosSecure = useAxiosSecure();

    const {data: classes = []} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
        const {data} = await axiosSecure.get('/classes');
        return data;
        }
    })

    const {data: trainers = []} = useQuery({
        queryKey: ['trainers'],
        queryFn: async() => {
        const {data} = await axiosSecure.get('/trainers');
        return data;
        }
    })

    const getRandomTrainers = () => {
        const shuffledTrainers = [...trainers].sort(() => 0.5 - Math.random());
        return shuffledTrainers.slice(0, 5);
      };


    return (
        <div className="my-10 mx-auto ml-10">
            <Helmet>
            <title>All Classes || FitnessBlender</title>
        </Helmet>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            classes?.map(item => {
                const trainers = getRandomTrainers();
   return(
    <div key={item._id} className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src={item.classImage} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
    <div className="flex flex-row mt-10 gap-5">
    {trainers.map((trainer, idx) => (
                <div key={idx} className="trainer">
                  <Link to={`/details/${trainer._id}`}>
                  <img className="w-16 h-12 rounded-3xl" src={trainer.profileImage} alt="" /></Link>
                </div>
            ))}
    </div>
	<div className="mt-6 mb-2">
		<h2 className="text-xl text-[#8A3324] font-semibold tracking-wide">{item.className}</h2>
	</div>
	<p className="dark:text-gray-800">{item.classDetails}</p>
</div>
   )
})
        }
        </div>
        </div>
    );
};

export default AllClasses;