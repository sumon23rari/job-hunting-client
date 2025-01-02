import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const HBottom = () => {
  const [inputValue,setInputValue]=useState('');

  const [getCollege,setGetCollege]=useState([]);
  

 
 
    const handleOnChange=(e)=>{
      setInputValue(e.target.value)

    }
    const handleClick=()=>{
      fetch(`https://job-hunting-server-sigma.vercel.app/searchCollege?collegeName=${inputValue}`)
      .then((res) => res.json())
      .then((data) =>{
         setGetCollege(data)
         setInputValue("");
         console.log("After clearing:", inputValue);
      })
      .catch((error) => console.error("Error fetching data:", error));
     
    }
   console.log(getCollege,'college')
    // const {}=getCollege;


    return (
        <div className="bg-gray-100">
   <div class="flex items-center bg-white shadow-lg rounded-lg overflow-hidden my-5">
      <input 
        type="text" 
        placeholder="search your college" 
        className="w-full px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        onChange={handleOnChange}
      />
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 font-semibold transition duration-300" onClick={handleClick}>
        search
      </button>
    </div>
        <br/>

      <div>
        {
          getCollege.map((c,index)=>  <div className="card w-full bg-base-100 shadow-xl m-4" key={index}>
                  <figure>
                    <img src={c.collegeImage} alt={c.collegeImage} className="w-2/3 h-48 object-cover m-4 rounded-md" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-lg font-bold">{c.collegeName}</h2>
                    <p><span className="font-semibold">Admission Dates:</span> {c.admissionDates}</p>
                    <p><span className="font-semibold">Research History:</span> {c.researchHistory}</p>
                    <p><span className="font-semibold">Events:</span> {c.events.join(', ')}</p>
                    <p><span className="font-semibold">Sports:</span> {c.sports.join(', ')}</p>
                  
                  </div>
                </div>)
        }
      </div>

      </div>
    );
};

export default HBottom;