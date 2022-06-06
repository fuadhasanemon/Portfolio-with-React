import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderScocial from './HeaderScocial'
import ME from '../../assets/images/fuad.png'
import BUBBLE from '../../assets/images/bubble.png'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const header = () => {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

return (
  <section>

<Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 250,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "top",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 40,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
    />

    <header>
  <div className="container header__container">
    <h5>Hello I'am</h5>
    <h1>Fuad Hasan Emon</h1>
    <h5 className="text-light">Full Stack Developer</h5>
    <HeaderScocial />
    <CTA />

    <div className="me">
      <img src={ME} alt="me" />
    </div>

    <a href="#contact" className='scroll__down'>Scroll Down</a>

    {/* <div className="bubbles">
      <img src={BUBBLE} alt="" />
      <img src={BUBBLE} alt="" />
      <img src={BUBBLE} alt="" />
      <img src={BUBBLE} alt="" />
      <img src={BUBBLE} alt="" />
      <img src={BUBBLE} alt="" />
      <img src={BUBBLE} alt="" />
    </div> */}

  </div>
</header>

  </section>

)
}

export default header