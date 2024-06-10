// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const AppliedTrainer = () => {
//     const axiosSecure = useAxiosSecure();

//     const {data: pending = [], isLoading, refetch} = useQuery({
//         queryKey: ['pending'],
//         queryFn: async() => {
//         const {data} = await axiosSecure.get('/pending');
//         return data;
//         }
//     })

//     if(isLoading){
//         return <span className="loading loading-bars loading-lg"></span>
//     }

//     const handleMakeTrainer = item => {
//      axiosSecure.patch(`/pending/trainer/${item._id}`)
//      .then(res => {
//         console.log(res.data);
//         if(res.data.modifiedCount > 0){
//             refetch()
//             Swal.fire({
//                 position: "top-end",
//                 icon: "success",
//                 title: `${item.name} is an trainer now!`,
//                 showConfirmButton: false,
//                 timer: 1500
//               });
//         }
//      })
//     }
    

//     return (
//         <div>
//             <div className="overflow-x-auto">
//   <table className="table bg-[#CD5C5C] text-white text-lg">
//     {/* head */}
//     <thead className="text-xl text-white">
//       <tr>
//         <th>Name</th>
//         <th>Role</th>
//         <th>Confirmation</th>
//         <th>Rejection</th>
//         <th>Details</th>
//       </tr>
//     </thead>
//     <tbody>
//       {
//         pending?.map(item => (
//             <tr key={item._id}>
//             <td>{item.name}</td>
//             <td>{item.role === 'trainer' ? 'Trainer' : item.role}</td>
//             <td>
//                 <button onClick={() => handleMakeTrainer(item)} className="btn bg-white text-green-500 text-base  rounded-full ">Confirmation</button>
//                 </td>
//             <td>
//             <button className="btn bg-white text-red-500 text-base border-0 border-b-4 rounded-full border-b-black">Reject</button>
//                 </td>
//             <td>
//                 {
//                 <Link to={`/dashboard/applied-trainer/details/${item._id}`}>
//                 <button className="btn bg-white text-[#CD5C5C] border-0 border-b-4 text-base border-b-black">Know More</button>
//                 </Link>
//                 }
//                 </td>
//           </tr>
//         ))
//       }
      
//     </tbody>
//   </table>
// </div>
//         </div>
//     );
// };

// export default AppliedTrainer;


import { Helmet } from 'react-helmet-async'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UserDataRow from '../../../components/UserDataRow/UserDataRow';

const AppliedTrainer = () => {

const {user} = useAuth();
const axiosSecure = useAxiosSecure();

const {data: users = [], isLoading, refetch} = useQuery({
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
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Applied Trainers</title>
        </Helmet>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Confirmation
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>

              {
                users.map(user =>(
                  <UserDataRow
                   key={user?._id}
                   user={user}
                   refetch={refetch}
                   ></UserDataRow>
                ))
              }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppliedTrainer