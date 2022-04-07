import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderScocial from './HeaderScocial'
import ME from '../../assets/images/fuad.png'
import BUBBLE from '../../assets/images/bubble.png'

const header = () => {
return (
  <section>
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