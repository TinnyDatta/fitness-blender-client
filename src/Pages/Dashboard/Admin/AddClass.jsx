import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const AddClass = () => {
const {user} = useAuth();

const handleAddClass = e => {
    e.preventDefault();
    const className = e.target.className.value;
    const classDetails = e.target.details.value;
    const classImage = e.target.image.value;
    const email = user?.email;

    const classInfo = {className, classDetails, classImage, email};

    fetch('http://localhost:5000/classes', {
        method: "POST",
        headers: { "content-type" : "application/json"},
        body: JSON.stringify(classInfo)
    })
    .then(res => res.json())
    .then(data => {
       if(data.insertedId){
        toast.success('class added successfully')
       }
    })

}

    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
          <Helmet>
          <title>Add Class</title>
        </Helmet>
      <form 
        onSubmit={handleAddClass}
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='className' className='block text-gray-600'>
                Class Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='className'
                id='location'
                type='text'
                placeholder='class name'
                required
              />
            </div>

          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='details' className='block text-gray-600'>
                Details
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='details'
                id='title'
                type='text'
                placeholder='details'
                required
              />
            </div>
          </div>
         
        </div>
        <div className='space-y-10 mt-6 '>
            <div className='space-y-1 text-sm'>
              <label htmlFor='image' className='block text-gray-600'>
                Class Image
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='image'
                id='title'
                type='text'
                placeholder='Image'
                required
              />
            </div>
          </div>
        <button
          type='submit'
          className=' p-3 mt-5 text-center btn-block font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Add New Class
        </button>
      </form>
    </div>
    );
};

export default AddClass;