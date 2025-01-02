import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
  const {user}=useContext(AuthContext)
    return (
      <div className='bg-blue-500 p-4 px-6 text-white sticky top-0 z-30'>
        <nav className=" flex justify-between items-center  ">
        <h1 className="text-xl font-bold">College Booking</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/colleges" className="hover:underline">Colleges</Link>
         {
          user?<>
           <Link to="/admission" className="hover:underline">Admission</Link>
           <Link to={`/myprofile/${user?.email}`} className='hover:underline'>{user?.displayName}</Link>
          </>:''
         }
        </div>
      </nav>
     </div>

    );
};

export default Navbar;