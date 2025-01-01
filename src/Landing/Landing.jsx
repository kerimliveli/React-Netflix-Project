import React, { useState, useEffect } from 'react';
import Entry from './companent/Entry';
import Gradient from './companent/Gradient';
import Trendig from './companent/Trendig';
import Reasons from './companent/Reasons';
import FAQ from './companent/FAQ';
import Email from './companent/email';
import Footer from './companent/Footer';

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        <Entry />
        <Gradient />
        <Trendig scrollY={scrollY} />
        <Reasons />
        <FAQ />
        <Email />
        <Footer />
    </div>
  );
}

export default Landing;
