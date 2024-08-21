import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader


const MyCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src='' alt="Image 1" />
        <p className="legend">Image 1 Description</p>
      </div>
      <div>
        <img src="" alt="Image 2" />
        <p className="legend">Image 2 Description</p>
      </div>
      <div>
        <img src="" alt="Image 3" />
        <p className="legend">Image 3 Description</p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
