
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";




const Navbar = () => {
 const {user, logout} = useContext(AuthContext)
 
    const navLinks = <>
    <li><NavLink to='/' className={({isActive}) => isActive? ' text-[#CD5C5C]  border border-[#CD5C5C] p-2' : ''}>Home</NavLink></li>
    <li><NavLink className={({isActive}) => isActive? ' border p-2 border-[#CD5C5C] text-[#CD5C5C]' : ''} to='/allTrainers'>All Trainer</NavLink></li> 
    <li><NavLink className={({isActive}) => isActive? ' border p-2 border-[#CD5C5C] text-[#CD5C5C]' : ''} to='/allClasses'>All Classes</NavLink></li> 
    <li><NavLink className={({isActive}) => isActive? ' border p-2 border-[#CD5C5C] text-[#CD5C5C]' : ''} to='/forum'>Forum</NavLink></li> 
    {
      user && <>
      <li><NavLink className={({isActive}) => isActive? ' border p-2 border-[#CD5C5C] text-[#CD5C5C]' : ''} to='/dashboard'>Dashboard</NavLink></li>
      </>
    }
    
    </>

    return (
        <div className="navbar bg-base-100 sm:mx-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0}  role="button" className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0}  className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-red-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a  className="btn btn-ghost text-2xl font-bold text-[#CD5C5C] ">FitnessBlender</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  
  <div className="navbar-end">
  {
    user?.email? 
    <div className="flex items-center gap-1">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full" title={user?.displayName || 'not found'}>
      <img alt="" src={user?.photoURL || 'https://i.ibb.co/s21kx6n/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg'} />
    </div>
  </div>
  <button onClick={logout} className="btn btn-sm btn-ghost">Logout</button>
      </div>
:
<div className="flex flex-row gap-2">
    <Link to='/login' className="btn" >Login</Link>
    
    <Link to='/register' className="btn">Register</Link>
</div>
  }
    
  </div>
</div>
    );
};

export default Navbar;

// const Navbar = () => {
//     return (
//         <div>
//             <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
// 	<div className="container flex justify-between h-16 mx-auto">
// 		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
// 			<h2 className="text-2xl font-bold">FitnessBlender</h2>
// 		</a>
// 		<ul className="items-stretch hidden space-x-3 lg:flex">
// 			<li className="flex">
// 				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Link</a>
// 			</li>
// 			<li className="flex">
// 				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
// 			</li>
// 			<li className="flex">
// 				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
// 			</li>
// 			<li className="flex">
// 				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
// 			</li>
// 		</ul>
// 		<div className="items-center flex-shrink-0 hidden lg:flex">
// 			<button className="self-center px-8 py-3 rounded">Sign in</button>
// 			<button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
// 		</div>
// 		<button className="p-4 lg:hidden">
// 			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
// 				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
// 			</svg>
// 		</button>
// 	</div>
// </header>
//         </div>
//     );
// };

// export default Navbar;