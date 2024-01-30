import React from 'react'
import './index.css'

function Footer () {
  return (
    <div className='footer-container'>
      <div className='footer-list-container d-none d-sm-none'>
        <ul className='footer-item-container'>
        <li className='list-item' >Home</li>
        <li className='list-item'>About</li>
        <li className='list-item'>Speaker</li>
        <li className='list-item'>Event</li>
        <li className='list-item'>Contact</li>
        </ul>
      </div>
      <hr className='border w-100 d-none d-sm-none'/>
      <div className='footer-copy-write'>
        <p className='m-0 text-center p-2'>Copyright &copy;2024 All rights reserved by Gondwana University Gadchiroli</p>
      </div>
    </div>
  )
}

export default Footer;