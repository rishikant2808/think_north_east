import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Conclave from '../../../pages/Conclave/Conclave';
const Navbar= () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const changeToggle = () => {
    if (window.scrollY >= 90 && window.innerWidth > 1000){
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  window.addEventListener("scroll", changeToggle);


  return (
    <nav className={ toggle ? 'navbar0 expanded' : 'navbar0'} style={{userSelect:'none'}} >
      <Link to="/">
        <img className='brand-logo logo' src="https://res.cloudinary.com/dbahks3cg/image/upload/f_auto,q_auto/dhnknup3aubgqnc40owo" alt="" />
      </Link>
      <div className='toggle-icon' onClick={handleToggle}>
        {toggle ? <ImCross size={20} /> : <GiHamburgerMenu size={25} />}
      </div>
      <ul className='links-nav' >
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/conclave">CONCLAVE</Link></li>
        <li><Link to="/gallery">GALLERY</Link></li>
        <li><Link to="/activities">ACTIVITIES</Link></li>
        <li><Link to="/tourists">TOURISTS</Link></li>
        <li><Link to="/internhips">INTERNSHIPS</Link></li>
        <li><Link to="/contsct">CONTACT US</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;