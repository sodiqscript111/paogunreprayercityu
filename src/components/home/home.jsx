
import React from 'react';
import Navbar from '../navbar/navbar';
import Welcome from '../welcome/welcome';
import Founder from '../founder/founder';
import Contact from '../contact/contact';
import AboutUs from '../about/about';
import FollowUsOnFacebook from '../followup/follow';
const Home = () => {
  return (
    <>
    <Navbar/>
    <Welcome/>
    <Founder/>
    <Contact/>
    <AboutUs></AboutUs>
    </>
  );
};

export default Home;
