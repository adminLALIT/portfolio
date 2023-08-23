import React from 'react'
import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={`topbar ${menuOpen && 'active'}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>portfolio.</a>
          <div className="itemContainer">
            <PersonIcon className='icon'/>
            <span>+91 9717-615-425</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className='icon'/>
            <span>yugilalitks@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
