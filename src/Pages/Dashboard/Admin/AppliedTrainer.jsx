

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