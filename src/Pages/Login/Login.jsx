


import { useContext, useState } from "react";
import {  Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const Login = () => {

  const {signInUser,updateUserProfile,} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [success, setSuccess] = useState('');

  // navigation
  const location = useLocation();
  const navigate = useNavigate();
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

// handle login
  const onSubmit = data => {
    const {email, password,name,photo} = data

    setLoginError('')
    setSuccess('')

    signInUser(email, password)
    .then(result => {
        console.log(result)
        // console.log('seccessfull')
      toast.success('Successfully login')
      if(result.user){
        updateUserProfile(name, photo)
      .then(()=> {
        // setUser((user)=>({
          
        //   ...user, displayName:name, photoURL: photo 
        //  }))
         
        navigate(location?.state || '/')
      })
      //  navigate(location?.state || '/')
      }
   })
   .catch((error) => {
    toast.error('Email & password should match with your register email & password');
    setLoginError(error.message);
   })
  };


    return (
      <div>
       <Helmet>
       <title>Login || FitnessBlender</title>
       </Helmet>
       <div className="hero">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="mb-3 text-3xl font-semibold text-center text-[#8A3324]">Login to your account</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <SocialLogin></SocialLogin>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[400px]">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" 
               {...register("email", { required: true })}
              />
               {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} 
              />
              {errors.password && <span className="text-red-500">This field is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn text-white bg-[#CD5C5C]">Login</button>
            </div>
            <div>
            <p className="text-center">Have an account? <Link to='/register' className="text-[#CD5C5C] font-bold ">Register</Link> </p>
            </div>
            
          </form>
         
        </div>
      </div>
    </div>
     </div>
    );
};

export default Login;
