import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useLoaderData, useParams } from 'react-router-dom';

const MyCollege = () => {
const specificCollege=useLoaderData();
  
    console.log(specificCollege,'specificCollege')
    return (
        <div className="card w-full md:w-2/3 mx-auto bg-base-100 shadow-xl m-4">
      
        <div className="card-body py-6 md:py-10">
          <h2 className="card-title text-lg font-bold">collegeName{specificCollege.collegeName}</h2>
          <p><span className="font-semibold">candidateName:</span> {specificCollege.canidateName}</p>
         <p><span className='font-semibold'>collegeDetails</span> {specificCollege.collegeName} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur provident nisi. Dolorum dolorem adipisci velit asperiores corrupti porro quo. </p>
          
        </div>

      </div>
    );
};

export default MyCollege;