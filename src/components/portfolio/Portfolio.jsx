import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/images/portfolio/1.png'
import IMG2 from '../../assets/images/portfolio/2.png'
import IMG3 from '../../assets/images/portfolio/3.png'
import IMG4 from '../../assets/images/portfolio/4.png'
import IMG5 from '../../assets/images/portfolio/5.png'
import IMG6 from '../../assets/images/portfolio/6.png'




const data = [
  {
    id: 1,
    image: IMG6,
    title: 'Eduko Pathway',
    github: 'JavaScript:void(0)',
    demo: 'https://bangladesh.edukopathways.com/',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Visual I',
    github: 'JavaScript:void(0)',
    demo: 'https://visualiweb.com/',
  },
  {
    id: 3,
    image: IMG2,
    title: 'AWR Real State',
    github: 'https://github.com/fuadhasanemon/AWR_Alpha',
    demo: 'https://awr-alpha.netlify.app',
  },
  {
    id: 4,
    image: IMG3,
    title: 'Seon International',
    github: 'JavaScript:void(0)',
    demo: 'https://soen-int.com/',
  },
  {
    id: 5,
    image: IMG4,
    title: 'Scribe',
    github: 'https://github.com/fuadhasanemon/Scribe-template',
    demo: 'https://fuadhasanemon.github.io/Scribe-template/',
  },
  {
    id: 6,
    image: IMG5,
    title: 'Landing Page',
    github: 'https://github.com/fuadhasanemon/HTML-template-design',
    demo: 'https://fuadhasanemon.github.io/HTML-template-design/',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                </div>

                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio