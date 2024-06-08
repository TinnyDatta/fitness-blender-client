import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageSlots = () => {

    const axiosSecure = useAxiosSecure();

    const {data: slots = [], isLoading} = useQuery({
        queryKey: ['slots'],
        queryFn: async() => {
        const {data} = await axiosSecure.get('/slots');
        return data;
        }
    })

    if(isLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full h-screen">
    {/* head */}
    <thead className="text-xl text-red-400">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Slot Time</th>
        <th>Day</th>
        <th>Class Name</th>
      </tr>
    </thead>
    <tbody className="text-lg">
     {
        slots?.map((slot, index) =>
<tr  key={slot._id} className="bg-base-200 py-2 ">
        <th>{index + 1}</th>
        <td >{slot.slotName}</td>
        <td>{slot.slotTime}</td>
        <td>{slot.day}</td>
        <td>{slot.selectedClass}</td>
      </tr>

         )
     }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageSlots;