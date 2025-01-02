import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({college}) => {

    return (
        <div className="card w-full bg-base-100 shadow-xl m-4">
        <figure>
          <img src={college.collegeImage} alt={college.collegeImage} className="w-full h-48 object-cover m-4 rounded-md" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold">{college.collegeName}</h2>
          <p><span className="font-semibold">Admission Dates:</span> {college.admissionDates}</p>
          <p><span className="font-semibold">Research History:</span> {college.researchHistory}</p>
          <p><span className="font-semibold">Events:</span> {college.events.join(', ')}</p>
          <p><span className="font-semibold">Sports:</span> {college.sports.join(', ')}</p>
          <div className="card-actions justify-end">
           <Link to={`/college/${college._id}`}> <button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default CollegeCard;