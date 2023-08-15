import React, { useState } from "react";
import "./portfolio.css";

import IMG1 from "../../assets/images/portfolio/1.jpg";
import IMG10 from "../../assets/images/portfolio/10.jpg";
import IMG2 from "../../assets/images/portfolio/2.jpg";
import IMG3 from "../../assets/images/portfolio/3.jpg";
import IMG4 from "../../assets/images/portfolio/4.jpg";
import IMG5 from "../../assets/images/portfolio/5.jpg";
import IMG6 from "../../assets/images/portfolio/6.jpg";
import IMG8 from "../../assets/images/portfolio/8.jpg";
import IMG9 from "../../assets/images/portfolio/9.jpg";
import IMG11 from "../../assets/images/portfolio/bestcollegequest.jpg";
import IMG12 from "../../assets/images/portfolio/canadachoicestor.jpg";
import IMG13 from "../../assets/images/portfolio/clubswan.jpg";
import IMG14 from "../../assets/images/portfolio/coinx-licenses.jpg";
import IMG15 from "../../assets/images/portfolio/dnotch-ca.jpg";
import IMG22 from "../../assets/images/portfolio/gablesrealty-ca.jpg";
import IMG16 from "../../assets/images/portfolio/marketing-clubswan.jpg";
import IMG17 from "../../assets/images/portfolio/mordenroaringlion.jpg";
import IMG18 from "../../assets/images/portfolio/pembinatimes.jpg";
import IMG19 from "../../assets/images/portfolio/simplelivinginsider.jpg";
import IMG20 from "../../assets/images/portfolio/strollerinsider.jpg";
import IMG21 from "../../assets/images/portfolio/tedxmorden.jpg";

const data = [
  {
    id: 1,
    image: IMG22,
    title: "Gables Realty",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://gablesrealty.ca/",
  },
  {
    id: 2,
    image: IMG21,
    title: "TedX Morden",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://tedxmorden.ca/",
  },
  {
    id: 3,
    image: IMG19,
    title: "Simple Living Insider",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://simplelivinginsider.com/",
  },
  {
    id: 4,
    image: IMG15,
    title: "Dnotch",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://dnotch.ca/",
  },
  {
    id: 5,
    image: IMG17,
    title: "Morden Roaring Lion",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://mordenroaringlions.ca/",
  },
  {
    id: 6,
    image: IMG13,
    title: "Clubswan",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://aucardllcstg.wpengine.com/",
  },
  {
    id: 7,
    image: IMG20,
    title: "Stroller Insider",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://strollerinsider.com/",
  },
  {
    id: 8,
    image: IMG11,
    title: "Best College Quest",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://bestcollegequest.com/",
  },
  {
    id: 9,
    image: IMG12,
    title: "Canada Choice Store",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://canadachoicestore.com/",
  },
  {
    id: 10,
    image: IMG16,
    title: "Marketing Clubswan",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://marketing.clubswan.com/",
  },
  {
    id: 11,
    image: IMG18,
    title: "Pembina Times",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://pembinatimes.ca/",
  },
  {
    id: 12,
    image: IMG14,
    title: "CoinX",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://coinx.com/licenses/",
  },
  {
    id: 13,
    image: IMG1,
    title: "Visual I",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://visualiweb.com/",
  },
  {
    id: 14,
    image: IMG2,
    title: "AWR Real State",
    gitStatus: "Github",
    github: "https://github.com/fuadhasanemon/AWR_Alpha",
    demo: "https://awr-alpha.netlify.app",
  },
  {
    id: 15,
    image: IMG3,
    title: "Seon International",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://soen-int.com/",
  },
  {
    id: 16,
    image: IMG4,
    title: "Scribe Inc.",
    gitStatus: "Github",
    github: "https://github.com/fuadhasanemon/Scribe-template",
    demo: "https://fuadhasanemon.github.io/Scribe-template/",
  },
  {
    id: 17,
    image: IMG5,
    title: "Landing Page For Client",
    gitStatus: "Github",
    github: "https://github.com/fuadhasanemon/HTML-template-design",
    demo: "https://fuadhasanemon.github.io/HTML-template-design/",
  },
  {
    id: 18,
    image: IMG6,
    title: "Educo Pathway",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://bangladesh.edukopathways.com/",
  },
  {
    id: 19,
    image: IMG8,
    title: "Laksha Bay Resturant",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://lakshabay.uk/",
  },
  {
    id: 20,
    image: IMG9,
    title: "Eco Ceramics",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://ecoceramics.com.bd/",
  },
  {
    id: 21,
    image: IMG10,
    title: "Laksha Group",
    gitStatus: "Github Privet",
    github: "JavaScript:void(0)",
    demo: "https://lakshagroup.com/",
  },
];

const Portfolio = () => {
  const [visible, setVisible] = useState(6);

  const showLoadMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data
          .slice(0, visible)
          .map(({ id, image, title, github, demo, gitStatus }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {gitStatus}
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
      </div>

      <div className="container loadMore">
        <a onClick={showLoadMore} className="btn">
          Load More
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
