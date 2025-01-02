import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Register = () => {
    const {handleGoogleSignIn,createUser,profileUpdate}=useContext(AuthContext);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();
        // google logIn system
  const handleUserGoogle=()=>{
    handleGoogleSignIn()
    .then((result) => {
    
      // The signed-in user info.
      const user = result.user;
     console.log(user,'user',user?.displayName)
  

 
     navigate('/')
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
        createUser(data.email,data.password)
        .then((userCredential)=>{
          const user = userCredential.user;
          profileUpdate(data.name,data.photo)
          .then(()=>{
      
     
        
Swal.fire({
  position: "middle",
  icon: "success",
  title: `user profile update successfully`,
  showConfirmButton: false,
  timer: 1500
});
            navigate('/')
      
          })
      
          .catch((error)=>{
            Swal.fire({
              title: `${error}`,
              text: 'Do you want to continue',
              icon: 'error',
              confirmButtonText: 'Cool'
            })
          });
        })
      
        .catch((error) => {
             
          Swal.fire({
            title: `${error}`,
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        });
      }
    return (
        <div className="py-[60px] bg-[#fff]">
        <div className="hero-content">
      
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div className='card-body'>
          <h3 className='text-center font-bold text-[#1760CE] text-2xl py-2'>Register an User</h3>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
         
            <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" name="name" placeholder="enter your name" {...register("name", { required: true })} className="input input-bordered" />
                      {errors.name && <span className='text-red '>name is required</span>}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">photo</span>
                      </label>
                      <input type="text" name="photo" placeholder="enter your name" {...register("photo", { required: true })} className="input input-bordered" />
                      {errors.photo && <span className='text-red '>photo is required</span>}
                    </div>
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
        <input className="btn btn-primary" type="submit" value="Sign Up"/>
        </div>
            
            </form>
            <p className='text-center my-3'>already have an account <Link to="/logIn" className='font-bold'>logIn</Link></p>
            <div className="divider">OR</div>
            <div className="form-control mt-6">
                <button className="btn  btn-outline text-[#1760CE] text-xl font-bold border-[#1760CE] hover:bg-[#039D55]"> <FaFacebook/>  <span>facebook</span></button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline text-[#1760CE] border-[#1760CE font-bold text-xl hover:bg-[#039D55]" onClick={handleUserGoogle}><FaGoogle/> <span>google</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;