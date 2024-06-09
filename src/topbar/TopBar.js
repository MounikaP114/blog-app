import React from 'react'
import './TopBar.css'

function TopBar() {
  return (
    <div className='top'>
      <div className='top-left'>
        <div className='topIcon'>
         <i className=" topLeftIcon fa-brands fa-square-instagram"></i>
          <i className=" topLeftIcon fa-brands fa-square-github"></i>
          <i className=" topLeftIcon fa-brands fa-linkedin"></i>
          <i className=" topLeftIcon fa-brands fa-square-whatsapp"></i>
        </div>
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
        src='https://imgs.search.brave.com/Q4caCGPtGiDYSfR6E0m5qyKx8mmEF6olNX3dqXLLjrY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2Jsb2ct/cmljaHRleHQtaW1h/Z2UvMTAtcHJvZmls/ZS1waWN0dXJlLWlk/ZWFzLXRvLW1ha2Ut/eW91LXN0YW5kLW91/dC5qcGc'
        alt='profile' ></img>
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>

      </div>
    </div>

  )
}

export default TopBar