import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ['WOMEN','NEW ARRIVALS','MEN','KIDS','SALE']

  const [width, setWidth] = useState(0)
  const navigate = useNavigate()

  const handleAuthClick =()=>{
    if(authenticate) {
      setAuthenticate(false)
      navigate('/')
    }else {
      navigate('/login')
    }
  }

  const search = (event)=>{
    if(event.key === "Enter") {
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <div>
      <div className='side-menu' style={{width:width}}>
        <button className='closeBtn' onClick={()=> setWidth(0)}>
          &times;
        </button>
        <div className='side-button-list' id="menu-list">
          {menuList.map((menu, index)=> (
          <button key={index}>{menu}</button>
        ))}
        </div>  
      </div>

      <div className='nav-header'>
        <div className='burger-menu'>
          <FontAwesomeIcon icon={faBars} onClick={()=> setWidth(250)} />
        </div>
        <div className='login-button' onClick={handleAuthClick}>
          <FontAwesomeIcon className="user-icon" icon={faUser}/>
          <div>{authenticate?'LOG OUT':'LOG IN'}</div>
        </div>
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
    
  )
}

export default Navbar
