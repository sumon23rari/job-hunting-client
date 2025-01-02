import React from 'react';


const Gallery = ({ images }) => (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-center py-10">College Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className="rounded shadow-md"
          />
        ))}
      </div>
    </section>
  );
  
  export default Gallery;
  