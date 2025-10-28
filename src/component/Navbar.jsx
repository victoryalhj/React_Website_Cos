import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Navbar = () => {
  const menuList = ['WOMEN','NEW ARRIVALS','MEN','KIDS','SALE']
  return (
    <div>
      <div>
        <div className='login-button'>
          <FontAwesomeIcon icon={faUser}/>
          <div>로그인</div>
        </div>

        <div className='nav-section'>
          <img width={100} src="https://media.gq-magazine.co.uk/photos/66e16e9d5bad7926f0288dfc/master/w_1600%2Cc_limit/COS_Logo.png" alt="" />
        </div>

        <div className='menu-area'>
          <ul className='menu-list'>
            {menuList.map(menu=><li>{menu}</li>)}
          </ul>
          <div className='search-area'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" placeholder='Search Product'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
