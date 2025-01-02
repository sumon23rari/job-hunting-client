import React from 'react';
import useCollegeDatas from '../../hooks/useCollegeDatas';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [collegeInfo]=useCollegeDatas();
    
    return (
        <div className='py-5 md:py-10'>
            <h3 className='text-center'>choice your dream college</h3>
            {
                collegeInfo.map((college,index)=><Link to={`/selectedCollege/${college.collegeName}`} key={index}><h3>{college.collegeName}</h3></Link>)
            }
        </div>
    );
};

export default Admission;