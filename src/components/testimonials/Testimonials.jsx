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
    review: 'Fuad offers small business web design and development. He offer more affordable services than other Freelancer, but his quality never falls short of expectations - I was given exactly what we discussed in my consultation with him! He developed my business website, and his business website development is more affordable than other professionals.',
    
  },
  {
    image: IMG2,
    name: 'Sara',
    review: 'How to go forward with website development and website speed optimization cost used to bother me a lot as a young entrepreneur. Then I searched for a Web Developer and Found Fuad Hasan. Now my worries are gone, and my business page seems terrific! It is completely SEO optimized and on the rank! I recommend him 10/10.',
  },
  {
    image: IMG3,
    name: 'Alex',
    review: 'Fuad helped me build a professional business website that fits all of my business needs! He is the best in his field of work as he offer transparency, affordability, and high-quality services. With him, I’ve built my business website from scratch for the most affordable prices in town! He is very professional.',
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
        autoplay={{ delay: 4000 }}
        
        
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