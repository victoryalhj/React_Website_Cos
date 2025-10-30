import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
useNavigate


const Navbar = () => {
  const menuList = ['WOMEN','NEW ARRIVALS','MEN','KIDS','SALE']

  const navigate = useNavigate()
  const goToLogin = ()=>{
    navigate('/login')
  }
  const search = (event)=>{
    if(event.key === "Enter") {
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <div>
      <div>
        <div className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon className="user-icon" icon={faUser}/>
          <div>LOG IN</div>
        </div>

        <div className='nav-section'>
          <a href="/">
            <img width={100} src="https://media.gq-magazine.co.uk/photos/66e16e9d5bad7926f0288dfc/master/w_1600%2Cc_limit/COS_Logo.png" alt="" />
          </a>
        </div>

        <div className='menu-area'>
          <ul className='menu-list'>
            {menuList.map(menu=><li>{menu}</li>)}
          </ul>
          <div className='search-area'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" onKeyPress={(event)=>search(event)} placeholder='Search Product'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
