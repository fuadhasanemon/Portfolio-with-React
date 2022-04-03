import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'

const HeaderScocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/fuad.h.emon"><AiFillFacebook/></a>
        <a href="https://github.com/fuadhasanemon/"><FaGithubSquare/></a>
        <a href="https://www.linkedin.com/in/fuadhasanemon2021/"><BsLinkedin /></a>
    </div>
  )
}

export default HeaderScocial