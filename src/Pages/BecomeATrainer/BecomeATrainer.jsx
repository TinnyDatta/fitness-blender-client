
import Select from 'react-select'
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
const BecomeATrainer = () => {
    const {user} = useAuth();

const handleApplyTrainer = async(e) => {
    e.preventDefault();
   const name = e.target.fullName.value;
   const age = e.target.age.value;
   const availableTime = e.target.availableTime.value;
   const profileImage = e.target.profileImage.value;
   const skill = e.target.skill.value;
   const day = e.target.day.value;
   const email = user?.email;
   const status = 'Pending';
   const role = 'member';

    const info = {name, age, availableTime, profileImage, day, skill, email, status, role};
    console.log(info);

    // fetch('https://fitness-blender-server.vercel.app/pending', {
    //     method: "POST",
    //     headers: { "content-type" : "application/json"},
    //     body: JSON.stringify(info)
    // })
    // .then(res => res.json())
    // .then(data => {
    //    if(data.insertedId){
    //     toast.success('inserted successfully')
    //    }
    // })

    fetch('https://fitness-blender-server.vercel.app/users', {
      method: "PUT",
      headers: { "content-type" : "application/json"},
      body: JSON.stringify(info)
  })
  .then(res => res.json())
  .then(data => {
     if(data.modifiedCount > 0){
      toast.success('request successful')
     }
  })
}

    const daysOptions = [
        {value: "Saturday", label: "Saturday"},
        {value: "Sunday", label: "Sunday"},
        {value: "Monday", label: "Monday"},
        {value: "Tuesday", label: "Tuesday"},
        {value: "Wednesday", label: "Wednesday"},
        {value: "Thursday", label: "Thursday"},
        {value: "Friday", label: "Friday"}
    ];

    const skillsOptions = [
        {value: "Biomechanics", label: "Biomechanics"},
        {value: "Diagnostics", label: "Diagnostics"},
        {value: "Engagement", label: "Engagement"},
        {value: "Patience", label: "Patience"},
        {value: "Nutrition", label: "Nutrition"},
        {value: "Assessment", label: "Assessment"},
        {value: "Periodization", label: "Periodization"},
        {value: "Instruction", label: "Instruction"}
    ]
    return (
        <div className='my-10 '>
            <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-[#fff6f6]'>
      <form  
      onSubmit={handleApplyTrainer}
      className='w-full p-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='fullName' className='block text-gray-600'>
                Full Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='fullName'
                id='location'
                type='text'
                placeholder='Full Name'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='age' className='block text-gray-600'>
                Age
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='age'
                id='location'
                type='text'
                placeholder='Age'
                required
              />
            </div>
                        {/* profile */}
                        <div className='space-y-1 text-sm'>
              <label htmlFor='profileImage' className='block text-gray-600'>
                Profile Image
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='profileImage'
                id='location'
                type='text'
                placeholder='Profile Image'
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
                options={daysOptions}
              >
              </Select>
            </div>

          </div>

          <div className='space-y-6'>
            {/* email */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='email' className='block text-gray-600'>
                Email
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='email'
                id='title'
                type='text'
                placeholder='Email'
                readOnly
                required
              />
            </div>
            {/* available time */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='availableTime' className='block text-gray-600'>
                Available Time
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='availableTime'
                id='location'
                type='text'
                placeholder='Available Time'
                required
              />
            </div>
            {/* skills */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='day' className='block text-gray-600'>
                Skill
              </label>
              <Select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='skill'
                options={skillsOptions}
              >
              </Select>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className=' p-3 mt-5 text-center btn-block font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Apply
        </button>
      </form>
    </div>
        </div>
    );
};

export default BecomeATrainer;