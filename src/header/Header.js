import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='headertitles'>
            <span className='headerNameSm'>React & Node</span>
            <span className='headerNameLg'>Blog</span>
        </div>
        <img className='header-image'
            src='https://images.pexels.com/photos/58420/pexels-photo-58420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            />
    </div>
  )
}

export default Header