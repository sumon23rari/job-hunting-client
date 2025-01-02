import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center py-5 font-bold'>
            <h3>this is notfound route</h3>
            <h3>are you comeBack Home page? please <Link to={'/'} className='text-bold text-orange-500'>click Here</Link></h3>
        </div>
    );
};

export default NotFound;