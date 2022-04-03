import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/images/icons/hacker.png'
import IMG2 from '../../assets/images/icons/woman.png'
import IMG3 from '../../assets/images/icons/delivery-boy.png'

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



const data = [
  {
    image: IMG1,
    name: 'Eliot',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error odit, ratione cum inventore iste exercitationem rerum laborum nesciunt in',
    
  },
  {
    image: IMG2,
    name: 'Sara',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error odit, ratione cum inventore iste exercitationem rerum laborum nesciunt in',
  },
  {
    image: IMG3,
    name: 'Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error odit, ratione cum inventore iste exercitationem rerum laborum nesciunt in',
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
         // install Swiper modules
        modules={[ Pagination, Autoplay ]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        
      >
        {
          data.map(({name, image, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                    <img src={image} alt={name} />
                </div>

                  <h5 className='client__name'>{name}</h5>
                  <small>{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default testimonials