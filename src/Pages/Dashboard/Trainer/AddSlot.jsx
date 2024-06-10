
import Select from 'react-select'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
const AddSlot = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const {data: classes = [], isLoading, refetch} = useQuery({
       queryKey: ['classes'],
      queryFn: async() => {
      const {data} = await axiosSecure.get('/classes');
      return data;
      }
  }) 

  const handleAddSlot = e => {
    e.preventDefault();
    const slotName = e.target.slotName.value;
    const day = e.target.day.value;
    const slotTime = e.target.slotTime.value;
    const selectedClass = e.target.className.value;
    const email = user?.email;
    const classInfo = {slotName, day, slotTime, selectedClass, email};

    fetch('https://fitness-blender-server.vercel.app/slots', {
        method: "POST",
        headers: { "content-type" : "application/json"},
        body: JSON.stringify(classInfo)
    })
    .then(res => res.json())
    .then(data => {
       if(data.insertedId){
        toast.success('slot added successfully')
        refetch()
       }
    })

}

  if(isLoading){
      return <span className="loading loading-bars loading-lg"></span>
  }

const options = [
    {value: "Saturday", label: "Saturday"},
    {value: "Sunday", label: "Sunday"},
    {value: "Monday", label: "Monday"},
    {value: "Tuesday", label: "Tuesday"},
    {value: "Wednesday", label: "Wednesday"},
    {value: "Thursday", label: "Thursday"},
    {value: "Friday", label: "Friday"}
]

const classOptions = classes.map(item => [
  {value: item.className, label: item.className}]);

  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <Helmet>
          <title>Add Slot</title>
        </Helmet>
      <form onSubmit={handleAddSlot}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='slotName' className='block text-gray-600'>
                Slot Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='slotName'
                id='location'
                type='text'
                placeholder='slot name'
                required
              />
            </div>

            {/* days */}

            <div className='space-y-1 text-sm'>
              <label htmlFor='day' className='block text-gray-600'>
                Day
              </label>
              <Select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='day'
                options={options}
              >
              </Select>
            </div>
          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='slot time' className='block text-gray-600'>
                Slot Time
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='slotTime'
                id='title'
                type='text'
                placeholder='slot time'
                required
              />
            </div>
{/* classes */}
<div className='space-y-1 text-sm'>
              <label htmlFor='class' className='block text-gray-600'>
                Class
              </label>
              <Select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='className'
                options={classOptions}
              >
                
              </Select>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className=' p-3 mt-5 text-center btn-block font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Add slot
        </button>
      </form>
    </div>
  )
}

export default AddSlot;