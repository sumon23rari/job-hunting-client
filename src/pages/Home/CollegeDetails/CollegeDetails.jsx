import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CollegeDetails = () => {
  const specificData=useLoaderData();
  const {_id,collegeName,collegeImage,admissionDates,events,researchHistor,sports}=specificData;
    return (
        <div>
     <h3>collegeDetails data hear</h3>
     <div className="card w-full bg-base-100 shadow-xl m-4">
        <figure>
          <img src={collegeImage} alt={collegeImage} className="w-full h-48 object-cover m-4 rounded-md" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold">{collegeName}</h2>
          <p><span className="font-semibold">Admission Dates:</span> {admissionDates}</p>
          <p><span className="font-semibold">Research History:</span> {researchHistor}</p>
          <p><span className="font-semibold">Events:</span> {events.join(', ')}</p>
          <p><span className="font-semibold">Sports:</span> {sports.join(', ')}</p>
          
        </div>
      </div>
        </div>
    );
};

export default CollegeDetails;