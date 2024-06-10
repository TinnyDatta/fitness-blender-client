import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEye } from "react-icons/fa";

const ActivityLog = () => {

  const axiosSecure = useAxiosSecure();

  const {data: users = [], isLoading} = useQuery({
    queryKey: ['users'],
    queryFn: async() => {
    const {data} = await axiosSecure.get('/users');
    return data;
    }
  })
  console.log(users);
  
  if(isLoading){
    return <span className="loading loading-bars loading-lg"></span>
  }

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full min-h-screen">
    {/* head */}
    <thead className="text-xl">
      <tr>
        <th>Email</th>
        <th>Status</th>
        <th>Role</th>
        <th></th>
      </tr>
    </thead>
    <tbody className="text-lg">
     {
        users?.map(item =>
<tr  key={item._id} className="bg-base-200 py-2 ">
        <td >{item.email}</td>
        <td >{item.role}</td>
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