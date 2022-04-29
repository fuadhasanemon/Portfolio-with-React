import React, { useState, useEffect } from 'react'
import './portfolio.css'


import IMG1 from '../../assets/images/portfolio/1.png'
import IMG2 from '../../assets/images/portfolio/2.png'
import IMG3 from '../../assets/images/portfolio/3.png'
import IMG4 from '../../assets/images/portfolio/4.png'
import IMG5 from '../../assets/images/portfolio/5.png'
import IMG6 from '../../assets/images/portfolio/6.png'
import IMG7 from '../../assets/images/portfolio/7.png'
import IMG8 from '../../assets/images/portfolio/8.png'
import IMG9 from '../../assets/images/portfolio/9.png'
import IMG10 from '../../assets/images/portfolio/10.png'


const data = [
  {
    id: 1,
    image: IMG6,
    title: 'Eduko Pathway',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://bangladesh.edukopathways.com/',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Visual I',
    gitStatus: 'Git Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://visualiweb.com/',
  },
  {
    id: 3,
    image: IMG2,
    title: 'AWR Real State',
    gitStatus: 'Github Link Available',
    github: 'https://github.com/fuadhasanemon/AWR_Alpha',
    demo: 'https://awr-alpha.netlify.app',
  },
  {
    id: 4,
    image: IMG3,
    title: 'Seon International',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://soen-int.com/',
  },
  {
    id: 5,
    image: IMG4,
    title: 'Scribe Inc.',
    gitStatus: 'Github Link Available',
    github: 'https://github.com/fuadhasanemon/Scribe-template',
    demo: 'https://fuadhasanemon.github.io/Scribe-template/',
  },
  {
    id: 6,
    image: IMG5,
    title: 'Landing Page For Client',
    gitStatus: 'Github Link Available',
    github: 'https://github.com/fuadhasanemon/HTML-template-design',
    demo: 'https://fuadhasanemon.github.io/HTML-template-design/',
  },
  // {
  //   id: 7,
  //   image: IMG7,
  //   title: 'Another Portfolio',
  //   gitStatus: 'Github Link Available',
  //   github: 'https://github.com/fuadhasanemon/Portfolio',
  //   demo: 'https://fuadhasanemon.github.io/Portfolio/',
  // },
  {
    id: 8,
    image: IMG8,
    title: 'Laksha Bay Resturant',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://lakshabay.uk/',
  },
  {
    id: 9,
    image: IMG9,
    title: 'Eco Ceramics',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://ecoceramics.com.bd/',
  },
  {
    id: 10,
    image: IMG10,
    title: 'Laksha Group',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://lakshagroup.com/',
  }

]


const Portfolio = () => {

  
  const [visible, setVisible] = useState(3);

  const showLoadMore = () => {
    setVisible((prevValue) => prevValue + 3);
  }

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.slice(0, visible).map(({id, image, title, github, demo, gitStatus}) => {
            return(

                <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                </div>

                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>{gitStatus}</a>
                    <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                  </div>

                </article>

            )
          })
        }
      </div>

      <div className="container loadMore">
        <a onClick={showLoadMore} className='btn'>Load More</a>
      </div>

    </section>
  )
}

export default Portfolio