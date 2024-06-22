
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useRole from "../../../hooks/useRole";


const AddForum = () => {
const {user} = useAuth();
const [role] = useRole()

const handleAddForum = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const title = e.target.title.value;
    const email = user?.email;

    const classInfo = {name, description, image, title, email, role};

    fetch('https://fitness-blender-server.vercel.app/posts', {
        method: "POST",
        headers: { "content-type" : "application/json"},
        body: JSON.stringify(classInfo)
    })
    .then(res => res.json())
    .then(data => {
       if(data.insertedId){
        toast.success('post added successfully')
       }
    })

}

    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
          <Helmet>
          <title>Add Forum</title>
        </Helmet>
      <form 
        onSubmit={handleAddForum}
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
                Posted By
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='name'
                id='location'
                type='text'
                placeholder='name'
                required
              />
            </div>

          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Title
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='title'
                id='title'
                type='text'
                placeholder='Title'
                required
              />
            </div>
          </div>
         
        </div>
        <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='image' className='block text-gray-600'>
               Image
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
          <div className='space-y-6'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='description'
                id='location'
                type='text'
                placeholder='Description'
                required
              />
            </div>

          </div>

          </div>
        <button
          type='submit'
          className=' p-3 mt-5 text-center btn-block font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Add Forum
        </button>
      </form>
    </div>
    );
};

export default AddForum;