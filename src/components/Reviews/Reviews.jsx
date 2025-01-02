import React from 'react';

const Reviews = ({ reviews }) => (
    <section className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="border-b py-4">
          <p className="font-bold">{review.user}</p>
          <p className="text-gray-600">{review.feedback}</p>
        </div>
      ))}
    </section>
  );
  
  export default Reviews;
  
