import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const AppliedTrainer = () => {
    const axiosSecure = useAxiosSecure();

    const {data: pending = [], isLoading, refetch} = useQuery({
        queryKey: ['pending'],
        queryFn: async() => {
        const {data} = await axiosSecure.get('/pending');
        return data;
        }
    })

    if(isLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    const handleMakeAdmin = item => {
     axiosSecure.patch(`/pending/trainer/${item._id}`)
     .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item.name} is an trainer now!`,
                showConfirmButton: false,
                timer: 1500
              });
        }
     })
    }
    

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table bg-[#CD5C5C] text-white text-lg">
    {/* head */}
    <thead className="text-xl text-white">
      <tr>
        <th>Name</th>
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
            <td>{item.role === 'trainer' ? 'Trainer' : item.role}</td>
            <td>
                <button onClick={() => handleMakeAdmin(item)} className="btn bg-white text-green-500 text-base  rounded-full ">Confirmation</button>
                </td>
            <td>
            <button className="btn bg-white text-red-500 text-base border-0 border-b-4 rounded-full border-b-black">Reject</button>
                </td>
            <td>
                {
                <Link to={`/dashboard/applied-trainer/details/${item._id}`}>
                <button className="btn bg-white text-[#CD5C5C] border-0 border-b-4 text-base border-b-black">Know More</button>
                </Link>
                }
                </td>
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