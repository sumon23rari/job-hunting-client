
import CollegeCard from './CollegeCard';
import useCollegeDatas from '../../hooks/useCollegeDatas';

const CollegeInfo = () => {
  
    const [collegeInfo,loading]=useCollegeDatas();

    return (
        <div>
          
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
       {
        collegeInfo?.map((college,index)=><CollegeCard college={college} key={index}></CollegeCard>)
       }
           </div>
        </div>
    );
};

export default CollegeInfo;