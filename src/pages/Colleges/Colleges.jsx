import React from 'react';
import useCollegeDatas from '../../hooks/useCollegeDatas';
import CollegeCard from '../../components/CollegeInfo/CollegeCard';

const Colleges = () => {
    const [collegeInfo]=useCollegeDatas();
    return (
        <div>
            <h3>my colleges routes</h3>
         
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
       {
        collegeInfo?.map((college,index)=><CollegeCard college={college} key={index}></CollegeCard>)
       }
           </div>
        </div>
    );
};

export default Colleges;