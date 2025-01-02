import React from 'react';

const Footer = () => {
    return (
<footer className="bg-gray-800 text-white text-center py-4">
    <p>&copy; {new Date().getFullYear()} College Booking. All rights reserved.</p>
    <p>Follow us on social media!</p>
  </footer>
    );
};

export default Footer;