import React from 'react'
import './TopBar.css'


function TopBar() {
  return (
    <div className='top'>
      <div className='top-left'>
      <i className=" topLeftIcon fa-brands fa-square-instagram"></i>
      <i className=" topLeftIcon fa-brands fa-square-github"></i>
      <i className=" topLeftIcon fa-brands fa-linkedin"></i>
      <i className=" topLeftIcon fa-brands fa-square-whatsapp"></i>
      </div>
      <div className='top-center'>
        <ul className='topList'>
          <li className='topListItem'>HOME</li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          <li className='topListItem'>WRITE</li>
          <li className='topListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className='top-right'>
        <img className='topImg' 
        src=''
        alt='profile' ></img>
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>

      </div>
    </div>

  )
}

export default TopBar