import React from 'react'
import Landing from '../../components/Home/Landing/Landing'
import About from '../../components/Home/About/About'
import Purpose from '../../components/Home/Purpose/Purpose'
import Footer from '../../components/Home/Footer/Footer'
import Testimonial from '../../components/Home/Testimonials/Testimonials'
const Home = () => {
  return (
    <div>
      <Landing />
      <br></br>
      <About />
      <br></br>
      <Purpose />
      <br></br>
      <Testimonial />
      <br></br>
      <Footer />
    </div>
  )
}

export default Home