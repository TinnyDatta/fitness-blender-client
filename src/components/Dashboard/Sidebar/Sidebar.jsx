import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { MdOutlineAddCircle } from "react-icons/md";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { AiOutlineBars } from 'react-icons/ai'
import { BiMinusFront } from "react-icons/bi";
import { CiSquareQuestion } from "react-icons/ci";
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import NavItem from '../Menu/NavItem';

const Sidebar = () => {
  const { logout } = useAuth()
  const [isActive, setActive] = useState(false);
  const [role] = useRole();
  console.log(role);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-[#fff6f6] text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
            <p  className="btn btn-ghost text-2xl font-bold text-[#CD5C5C] ">FitnessBlender</p>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#fff6f6] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
              <Link to='/'>
              <p className="btn btn-ghost text-2xl font-bold text-[#CD5C5C] ">FitnessBlender</p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            <nav>
            <NavItem 
              label='Front Page' 
              address='/dashboard' 
              icon={BiMinusFront} >
              </NavItem>
               {/* pages for trainer */}
              {role === 'trainer' && (
                <div>
                  <NavItem 
              label='Add Slot' 
              address='add-slot' 
              icon={MdOutlineAddCircle} >
              </NavItem>
      
              
              <NavItem 
              label='Manage Slots' 
              address='manage-slot' 
              icon={MdOutlineLibraryAddCheck} >
              </NavItem>
              
             
              <NavItem 
              label='Add Forum' 
              address='add-forum' 
              icon={MdOutlineForum} >
              </NavItem>
                </div>
              )
                }

                {/* pages for admin */}

                { role === 'admin' && (
                  <div>
                    <NavItem 
              label='Newsletter Subscribers' 
              address='subscribers' 
              icon={MdEmail} >
              </NavItem>

              <NavItem 
              label='All Trainers' 
              address='all-trainers' 
              icon={MdGroups} >
              </NavItem>

              <NavItem 
              label='Applied Trainer' 
              address='applied-trainer' 
              icon={CiSquareQuestion} >
              </NavItem>

              <NavItem 
              label='Add Class' 
              address='add-class' 
              icon={MdPostAdd} >
              </NavItem>
                  </div>
                )}

            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <FcSettings className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
            onClick={logout}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar