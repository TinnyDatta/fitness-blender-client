import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AppliedTrainer = () => {

    const axiosSecure = useAxiosSecure();

    const {data: pending = []} = useQuery({
        queryKey: ['pending'],
        queryFn: async() => {
        const {data} = await axiosSecure.get('/pending');
        return data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table bg-[#CD5C5C] text-white text-lg">
    {/* head */}
    <thead className="text-xl text-white">
      <tr>
        <th>Name</th>
        <th>Skill</th>
        <th>Role</th>
        <th>Confirmation</th>
        <th>Rejection</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {
        pending?.map(item => (
            <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.skill}</td>
            <td>{item.role}</td>
            <td>{item.role}</td>
            <td>{item.role}</td>
            <td>{
                // <Link to={`details/${item._id}`}>
                // <button className="btn bg-white text-[#CD5C5C] border-0 border-b-4 border-b-black">Know More</button>
                // </Link>
                <Link to={`/dashboard/applied-trainer/details/${item._id}`}>
                <button className="btn bg-white text-[#CD5C5C] border-0 border-b-4 border-b-black">Know More</button>
                </Link>
                }</td>
          </tr>
        ))
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AppliedTrainer;