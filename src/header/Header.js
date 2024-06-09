import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-start'>
        <div className='header'>
            <span className='headerNameSm'>React & Node</span>
            <span className='headerNameLg'>Blog</span>
        </div>
        <img className='heade-image'
        src='https://images.pexels.com/photos/1809338/pexels-photo-1809338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='header image'
        ></img>
    </div>
  )
}

export default Header