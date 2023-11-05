import React from 'react'
import './About.css'
import about from './about.png'
const About = () => {
  return (
    <div className='about'>
        <h1 style={{textAlign:'center',paddingTop:'20px'}}>About Us</h1>
        <div style={{textAlign:'center'}}>
        <img className='brand-logo logo' src="https://res.cloudinary.com/dbahks3cg/image/upload/f_auto,q_auto/dhnknup3aubgqnc40owo" alt="" />
        </div>

        <div className="wrapper">
          <div className='hello'> 
          <img src={about} alt="" />
          </div>
          <div className="text-about">
            <p>
            We at Think North East have felt the need to bind the students with an Indian nationalistic string to harness this part of national treasure in furthering our aim of national reconstruction.Students from IISc, IIMB, NIMHANS and NLSIU joined together to create a joint forum for the students from premier institutes of North East in 2006. A formal forum took placed at the Art of Living Ashram , Bengaluru in 2007.<br/>
            We at Think North East have felt the need to bind the students with an Indian nationalistic string to harness this part of national treasure in furthering our aim of national reconstruction.Students from IISc, IIMB, NIMHANS and NLSIU joined together to create a joint forum for the students from premier institutes of North East in 2006. A formal forum took placed at the Art of Living Ashram , Bengaluru in 2007.<br/>
            </p>
          </div>
        </div>

        {/* <section className="aboutSec">
        <div className="left">
          <img className="northEast"  src="https://res.cloudinary.com/priyojit/image/upload/v1688137697/aboutusss_jdi1fi.jpg" alt=""/>
        </div>

        <div className="right">
        <p style={{textAlign:'left',marginLeft:'15px',marginRight:'25px',paddingBottom:'20px'}}>
        We at Think North East have felt the need to bind the students with an Indian nationalistic string to harness this part of national treasure in furthering our aim of national reconstruction.Students from IISc, IIMB, NIMHANS and NLSIU joined together to create a joint forum for the students from premier institutes of North East in 2006. A formal forum took placed at the Art of Living Ashram , Bengaluru in 2007.<br/>
        We at Think North East have felt the need to bind the students with an Indian nationalistic string to harness this part of national treasure in furthering our aim of national reconstruction.Students from IISc, IIMB, NIMHANS and NLSIU joined together to create a joint forum for the students from premier institutes of North East in 2006. A formal forum took placed at the Art of Living Ashram , Bengaluru in 2007.<br/>
        We at Think North East have felt the need to bind the students with an Indian nationalistic string to harness this part of national treasure in furthering our aim of national reconstruction.Students from IISc, IIMB, NIMHANS and NLSIU joined together to create a joint forum for the students from premier institutes of North East in 2006. A formal forum took placed at the Art of Living Ashram , Bengaluru in 2007.
        </p>
        </div>
        </section> */}

        <div style={{float:'right'}}>
        {/* <img className='brand-logo logo' src="https://res.cloudinary.com/priyojit/image/upload/v1687723646/think_india_logo_f20xsm.png" alt="" /> */}
          </div>
    </div>
  )
}

export default About