import React from 'react';
import About from './about/AboutSection';
import Footer from './footer/Footer';
import MainPageHeader from './header/MainPageHeader';
import MainSection from './Main/MainSection';
import ProductSection from './products/ProductsSection';
import WelcomeMainPage from './WelcomeSection/WelcomeMainPage';

function App() {
  return (
    <div className="wrapper">
      <MainPageHeader />
      <WelcomeMainPage />
      <MainSection />
      <About />
      <ProductSection />
      <Footer />
    </div>
  );
}
export default App;
