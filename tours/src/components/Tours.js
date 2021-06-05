import React from 'react';
import Tour from './Tour';
import '../index.css';

const Tours = ({ tours, handleRemoveTour }) => {
  return (
    <section className="tours">
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline">
        </div>
      </div>
      <div>
        {tours.map(tour => {
          return <Tour key={tour.id} {...tour} handleRemoveTour={handleRemoveTour} />
        })}
      </div>
    </section>
  )
};



export default Tours;