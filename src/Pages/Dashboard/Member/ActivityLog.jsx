import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEye } from "react-icons/fa";

const ActivityLog = () => {

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
  <table className="table w-full min-h-screen">
    {/* head */}
    <thead className="text-xl">
      <tr>
        <th>Name</th>
        <th>Skill</th>
        <th>Day</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody className="text-lg">
     {
        pending?.map(item =>
<tr  key={item._id} className="bg-base-200 py-2 ">
        <td >{item.name}</td>
        <td>{item.skill}</td>
        <td>{item.day}</td>
        <td className="text-red-400">{item.status} </td>
        <td><FaEye /> </td>
      </tr>

         )
     }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ActivityLog;