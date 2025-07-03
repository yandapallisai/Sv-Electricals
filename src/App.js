import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import SubmitReview from './components/SubmitReview';
import ReviewPage from './components/ReviewPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <AboutUs />
            <Services />
            <Testimonials />
          </>
        );
      case 'services':
        return <Services fullPage={true} />;
      case 'about':
        return <AboutUs fullPage={true} />;
      case 'contact':
        return <Contact />;
      case 'review':
        return <SubmitReview />;
      case 'reviewpage':
        return <ReviewPage />;
      default:
        return (
          <>
            <HeroSection />
            <AboutUs />
            <Services />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;