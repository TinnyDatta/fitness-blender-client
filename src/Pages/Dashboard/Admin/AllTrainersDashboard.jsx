import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AllTrainersDashboard = () => {

    const axiosSecure = useAxiosSecure();

    const {data: trainers = [], isLoading} = useQuery({
        queryKey: ['trainers'],
        queryFn: async() => {
        const {data} = await axiosSecure.get('/trainers');
        return data;
        }
    })

    if(isLoading){
      return <span className="loading loading-bars loading-lg"></span>
  }

    return (
        <div>
          <Helmet>
          <title>All Trainers</title>
        </Helmet>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Experience</th>
        <th>Expertise</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        trainers.map(trainer => (
            <tr key={trainer._id}>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={trainer.profileImage} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{trainer.trainerName}</div>
                </div>
              </div>
            </td>
            <td>
             {trainer.yearsOfExperience} Years
            </td>
            <td>{trainer.expertise}</td>
            <th>
              <button className="btn bg-red-500 text-white btn-ghost btn-xs">delete</button>
            </th>
          </tr>
        ))
      }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AllTrainersDashboard;