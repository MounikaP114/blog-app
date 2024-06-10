import './SideBare.css'

function SideBar() {
  return (
    <div className='sidebar'>
        <div className='sideBarItem'>
            <span className='sideBarTitle'>ABOUT ME</span>
            <img id='aboutimage'
                src='https://images.pexels.com/photos/6230973/pexels-photo-6230973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                // https://www.pexels.com/photo/inspirational-quotes-aspire-to-inspire-7414223/
                alt=''></img>
                <p>Laboris sint sit et ut fugiat laborum amet sunt. Pariatur occaecat magna anim sit culpa exercitation. Culpa aute eiusmod esse dolore est occaecat ut duis quis. In dolor proident pariatur qui adipisicing commodo culpa. Consequat aliqua nisi ex fugiat esse deserunt dolor veniam magna adipisicing reprehenderit tempor. Voluptate irure eu aliquip labore esse adipisicing do ut nisi consectetur Lorem.
                    </p>
        </div>
        <div className='sideBarItem'>
            <span className='sideBarTitle'>CATEGORIES</span>
            <ul className='sideBarList'>
                <li className='siideBarListItem'>item</li>
                <li className='siideBarListItem'>item</li>
                <li className='siideBarListItem'>item</li>
                <li className='siideBarListItem'>item</li>
                <li className='siideBarListItem'>item</li>
                <li className='siideBarListItem'>item</li>
            </ul>
            
        </div>
        <div className='sideBarItem'>
            <span className='sideBarTitle'>FOLLOW IS</span>
            <div className='sideBarSocialIcons'>
                <i className=" sideBarIcon fa-brands fa-square-instagram"></i>
                <i className=" sideBarIcon fa-brands fa-square-github"></i>
                <i className=" sideBarIcon fa-brands fa-linkedin"></i>
                <i className=" sideBarIcon fa-brands fa-square-whatsapp"></i>
            </div>
        </div>
    </div>
  )
}

export default SideBar