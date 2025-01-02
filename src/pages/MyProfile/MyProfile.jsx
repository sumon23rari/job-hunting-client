import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { FaUpload } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const MyProfile = () => {
    const {user}=useContext(AuthContext);
    const [open,setOpen]=useState(false);
    const specificData=useLoaderData();
    const {_id,collegeName,canidateName,candidateEmail,candidateAddress}=specificData;
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
      const axiosPublic=useAxiosPublic();
      const onSubmit =async (data) =>{
        console.log('data',data);
      
       
        if (res.data.success) {
         
          const updateProfile={
            collegeName:data.collegeName,
            canidateName:data.canidateName,
            candidateEmail:data.candidateEmail,
            candidateAddress:data.candidateAddress,
          }
          console.log(updateProfile,'menuiaidfo')
          const updateProfileInfo=await axiosPublic.patch(`/admissionOn/${_id}`,updateProfile)
          console.log('addProduct',updateProfileInfo)
         if (updateProfile.data.modifiedCount>0) {
          reset();
          Swal.fire({
            position: "middle",
            icon: "success",
            title: `your ${data.canidateName} your profile updated successfully`,
            showConfirmButton: false,
            timer: 1500
          })
         
         }
     
         
        console.log(updateProfile)
        }
      
      };
    
    return (
        <div className='text-center font-bold capitalize text-2xl  card-body shadow-xl min-h-screen my-5 md:my-10 py-8 w-2/3 mx-auto  md:w-3/5'>
            <h3>userName:{user?.displayName}</h3>
            <h3>userEmail:{user?.email}</h3>
           <h3>are you update your profile? </h3>
           {
            open?<>
                      <form className="py-5" onSubmit={handleSubmit(onSubmit)}>
                {/* class1 */}
   <div className='grid grid-cols-1 md:grid-cols-2  gap-4 shadow-md card-body rounded'>
   <div className="form-control">
             <label className="label">
               <span className="label-text">College  Name</span>
             </label>
             <input type="text" name="collegeName" defaultValue={collegeName}   placeholder="enter your name" {...register("collegeName", { required: true })} className="input input-bordered" />
             {errors.name && <span className='text-red '>CollegeName is required</span>}
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">candidate  Name</span>
             </label>
             <input type="text" name="canidateName" defaultValue={canidateName} placeholder="candidate name"  className="input input-bordered" {...register("canidateName", { required: true })} />
             {errors.canidateName && <span className='text-red'>canidateName is required</span>}
           </div>
         
       
        
           <div className="form-control">
             <label className="label">
               <span className="label-text">candidate Email</span>
             </label>
             <input type="email" name="email" defaultValue={user?.email}   placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
             {errors.email && <span className='text-red'>This field is required</span>}
           </div>
         
           <div className="form-control">
             <label className="label">
               <span className="label-text">candidate Address</span>
             </label>
             <input type="text" name="address" placeholder="address"  defaultValue={candidateAddress} className="input input-bordered" {...register("address", { required: true })} />
             {errors.address && <span className='text-red'>This field is required</span>}
           </div>
        
        
           </div>

     <div className="form-control mt-6 mx-auto w-1/2 card-body">
     <input className="btn btn-primary" type="submit" onClick={()=>setOpen(false)} value="submit now"  />
     </div>
   </form>
            </>:<>
            <button onClick={()=>setOpen(true)} className='btn btn-primary w-1/3 my-5 md:w-1/4 mx-auto'>edit</button>
            </>
           }
            
        </div>
    );
};

export default MyProfile;