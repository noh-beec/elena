import React from 'react';
import About from '../components/AboutSection';
import Products from '../components/ProductsSection';
import Faq from '../components/FaqSection';
import Contact from  '../components/ContactSection';

const Home = (props) => {
    return (
        <>
          <About></About>
          <Products></Products>
          <Faq></Faq>
          <Contact></Contact>
        </>
    )
}

export default Home;