
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-light-gray min-h-screen">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Testimonials />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
