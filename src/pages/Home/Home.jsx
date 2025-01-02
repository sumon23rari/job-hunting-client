import React from 'react';
import Navbar from '../../components/Shared/Header/Navbar';
import HBottom from '../../components/Shared/Header/HBottom';
import CollegeInfo from '../../components/CollegeInfo/CollegeInfo';
import Gallery from '../../components/Gallary/Gallary';
import ResearchPapers from '../../components/ReacheresPapper/ReacheresPapper';

const images=[
    ' https://i.ibb.co.com/8BcwrYR/university-2704306-1280.jpg',
    ' https://i.ibb.co.com/8BcwrYR/university-2704306-1280.jpg',
    ' https://i.ibb.co.com/8BcwrYR/university-2704306-1280.jpg',
    ' https://i.ibb.co.com/8BcwrYR/university-2704306-1280.jpg'
   ]

const Home = () => {
    return (
        <div>
          
            <HBottom></HBottom>
            <CollegeInfo></CollegeInfo>
       <Gallery images={images}></Gallery>
     <ResearchPapers></ResearchPapers>
        </div>
    );
};

export default Home;