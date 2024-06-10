import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageSlots = () => {

    const axiosSecure = useAxiosSecure();

    const {data: slots = [], isLoading, refetch} = useQuery({
        queryKey: ['slots'],
        queryFn: async() => {
        const {data} = await axiosSecure.get('/slots');
        return data;
        }
    })

    if(isLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    const handleDeleteSlot = slot =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

          axiosSecure.delete(`/slots/${slot._id}`)
          .then(res => {
            if(res.data.deletedCount > 0){
              refetch()
              Swal.fire({
            title: "Deleted!",
            text: "This slot has been deleted.",
            icon: "success"
          });
            }
          })
        }
      });
    }

    return (
        <div>
          <Helmet>
          <title>Manage Slot</title>
        </Helmet>
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
        <th>Action</th>
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
        <td>{
          <button 
          onClick={() => handleDeleteSlot(slot)}
          className="btn btn-error"><RiDeleteBin6Line /></button>
          }</td>
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