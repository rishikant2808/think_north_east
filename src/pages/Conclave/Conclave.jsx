import react from 'react'
import { Navigate } from 'react-router-dom';
import Hero from './swarup/Hero';
import Unite from './pragyan/Unite';
import Events from './barnil/Events';
import Sponsors from './barnil/Sponsors';
import Footer from './barnil/Footer';
// import Institute from './Institute';
import Speakers from './barnil/Speakers';
import Theme from './sahin/Theme';
import Navbar from '../../components/navfoot/Navbar/Navbar';

const Conclave = () => {
  
  return (
    <div className='flex'>
      <Navbar/>
      <Hero/>
      <Unite />
      <Events />
      <Theme />
      <Speakers />
      <Sponsors />
       {/* <Institute /> */}
       <Footer />
    </div>
    
  )
};
export default Conclave