import PropTypes from 'prop-types'
import { useState } from 'react'
import UpdateUserModal from '../Modal/UpdateUserModal';
import { useMutation } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const UserDataRow = ({ user, refetch }) => {

const [isOpen, setIsOpen] = useState(false);
const axiosSecure = useAxiosSecure()

const {mutateAsync} = useMutation({
    mutationFn: async role=>{
     const {data} = await axiosSecure.patch(`/users/update/${user?.email}`, role
     )
     return data
    },
    onSuccess: data=>{
        refetch()
        console.log(data)
        toast.success('role updated')
        setIsOpen(false)
    }
})

const modalHandler = async selected =>{
    console.log(selected);
    const user = {
        role: selected,
        status: 'verified',
    }
    try {
        await mutateAsync(user)
    }catch (err) {
        console.log(err)
        toast.err(err.message)
    }
}

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {user?.status ? (
          <p
            className={`${
              user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button onClick={()=>setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-[#CD5C5C] leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Confirm</span>
        </button>
        <UpdateUserModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalHandler={modalHandler}
        user={user}
        ></UpdateUserModal>
      </td>
      <td>
        <Link to={`/dashboard/applied-trainer/details/${user?._id}`}>
        <button>details</button>
        </Link>
      </td>
    </tr>
  )
}

UserDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
}

export default UserDataRow