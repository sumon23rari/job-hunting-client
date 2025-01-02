import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const LogIn = () => {
    const {logInUser,handleGoogleSignIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    let from = location.state?.from?.pathname || "/";
    const {
      register,
      formState: { errors },
      handleSubmit,
      reset
    } = useForm();
    const handleUserGoogle=()=>{
      handleGoogleSignIn()
      .then((result) => {
      
        // The signed-in user info.
        const user = result.user;
       Swal.fire({
        position: "middle",
        icon: "success",
        title: `${user?.displayName} logIn successfully`,
        showConfirmButton: false,
        timer: 1500
      });
       navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      console.log(errorMessage)
        // ...
      });
        };
    const onSubmit=(data)=>{
      console.log(data.email,data.password)
      logInUser(data.email,data.password)
      .then((userCredential)=>{
        const user = userCredential.user;
       
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "user logIn successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
        console.log('user',user)
        reset();
      })
     
  
    }
    return (
        <div className="py-[60px] bg-[#fff]">
        <div className="hero-content ">
      
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div className='card-body'>
          <h3 className='text-center font-bold text-[#1760CE] text-2xl py-2'>Register an User</h3>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                      {errors.email && <span className='text-red'>This field is required</span>}
                    </div>
                    <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 10,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 10 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            
                            </div>
                    <div className="form-control mt-6">
                      <button className="btn bg-[#D1A054] text-white">Login</button>
                    </div>
                  </form>
            <p className='text-center my-3'>create have an account? please<Link to="/register" className='font-bold'>signUp</Link></p>
            <p>demo user:hydarAli@gmail.com</p>
            <p>demo password:As$02dhe</p>
            <div className="divider">OR</div>
            <div className="form-control mt-6">
                <button className="btn  btn-outline text-[#1760CE] text-xl font-bold border-[#1760CE] hover:bg-[#039D55]"> <FaFacebook/>  <span>facebook</span></button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline text-[#1760CE] text-xl font-bold border-[#1760CE] hover:bg-[#039D55] " onClick={handleUserGoogle}><FaGoogle/> <span>google</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;