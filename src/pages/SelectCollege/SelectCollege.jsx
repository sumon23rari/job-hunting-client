import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import useAxiosPublic from './../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const SelectCollege = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();
      const navigate=useNavigate();
      const axiosPublic=useAxiosPublic();
   const {names}=useParams();
 const {user}=useContext(AuthContext);
      const onSubmit=async(data)=>{
        console.log(data)
        const imageFile={image:data?.photo[0]};
        console.log(imageFile?.name,'imageFile')
        const res=await axiosPublic.post(image_hosting_api,imageFile,{
          headers:{
            'content-type':'multipart/form-data'
          }
        })
        if (res.data.success) {
          const collegeInfoData={
            collegeName:data.collegeName,
            canidateName:data.canidateName,
            candidatePhoto:data.photo,
            candidateEmail:data.email,
            subject:data.subject,
            candidateBirth:data.birth,
            candidateAddress:data.address,
            candidateSubject:data.subject
          }
          const admissionGoing=axiosPublic.post('/admissionOn',collegeInfoData);
          console.log(admissionGoing,'admissionGoing')
          if (admissionGoing.data?.insertedId) {
            reset();
            Swal.fire({
              position: "middle",
              icon: "success",
              title: `your ${data.productName} item added successfully`,
              showConfirmButton: false,
              timer: 1500
            })
            navigate(`/myCollege/${user?.email}`)
          }
          else if(admissionGoing.data?.insertedId===null){
            Swal.fire({
              position: "middle",
              icon: "success",
              title: ` ${data.candidateName} already another college admission done`,
              showConfirmButton: false,
              timer: 1500
            })
           }
           
          console.log(collegeInfoData)
        }
     
      }
    return (
        <div className='my-10 mx-auto w-2/3'>
            <h3 className='text-center text-xl font-semibold'>candidate choose this college {names}</h3>
            <form className="py-5" onSubmit={handleSubmit(onSubmit)}>
                {/* class1 */}
   <div className='grid grid-cols-1 md:grid-cols-2  gap-4 shadow-md card-body rounded'>
   <div className="form-control">
             <label className="label">
               <span className="label-text">College  Name</span>
             </label>
             <input type="text" name="collegeName" value={names} readOnly  placeholder="enter your name" {...register("collegeName", { required: true })} className="input input-bordered" />
             {errors.name && <span className='text-red '>CollegeName is required</span>}
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">candidate  Name</span>
             </label>
             <input type="text" name="canidateName" value={user?.displayName} placeholder="candidate name" readOnly className="input input-bordered" {...register("canidateName", { required: true })} />
             {errors.canidateName && <span className='text-red'>canidateName is required</span>}
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">candidate photo</span>
             </label>
             <input type="file" name="photo" placeholder="enter your photo" {...register("photo", { required: true })} className="input input-bordered" />
             {errors.photo && <span className='text-red '>photo is required</span>}
           </div>
       
        
           <div className="form-control">
             <label className="label">
               <span className="label-text">candidate Email</span>
             </label>
             <input type="email" name="email" value={user?.email} readOnly  placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
             {errors.email && <span className='text-red'>This field is required</span>}
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">candidate Phone Number</span>
             </label>
             <input type="number" name="number" placeholder="phoneNumber" className="input input-bordered" {...register("number", { required: true })} />
             {errors.number && <span className='text-red'>This field is required</span>}
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">candidate Address</span>
             </label>
             <input type="text" name="address" placeholder="address" className="input input-bordered" {...register("address", { required: true })} />
             {errors.address && <span className='text-red'>This field is required</span>}
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Date of Birth</span>
             </label>
             <input type="date" name="birth" placeholder="DateOfBirth" className="input input-bordered" {...register("birth", { required: true })} />
             {errors.birth && <span className='text-red'>This field is required</span>}
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">choose your subject</span>
             </label>
             <select defaultValue="default" className="select select-bordered"  {...register("subject")}>
    <option disabled selected>Pick one</option>

    <option>Bangla</option>
    <option>English</option>
    <option>social science</option>
    <option>Islamic studies</option>
    <option>Physices</option>
    <option>MathMatics</option>
  
  </select>
           </div>
        
           </div>

     <div className="form-control mt-6 mx-auto w-1/2 card-body">
     <input className="btn btn-primary" type="submit" value="submit now"  />
     </div>
   </form> 
        </div>
    );
};

export default SelectCollege;