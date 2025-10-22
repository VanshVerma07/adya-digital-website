
import React from 'react';
import AnimatedSection from './AnimatedSection';

const FloatingShape: React.FC<{ className: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <div className={`absolute rounded-full filter blur-xl opacity-20 ${className}`} style={style}></div>
);

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-light-gray to-secondary/10"></div>
            
            <FloatingShape className="bg-primary w-64 h-64 -top-10 -left-20 animate-pulse" style={{ animationDuration: '8s' }} />
            <FloatingShape className="bg-secondary w-72 h-72 -bottom-20 -right-10 animate-pulse" style={{ animationDuration: '10s' }} />
            <FloatingShape className="bg-primary w-48 h-48 bottom-1/4 left-1/4 animate-pulse" style={{ animationDuration: '12s' }} />
            <FloatingShape className="bg-secondary w-32 h-32 top-1/4 right-1/4 animate-pulse" style={{ animationDuration: '9s' }} />

            <div className="container mx-auto px-6 text-center relative z-10">
                <AnimatedSection>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
                        Empowering Startups & MSMEs
                        <br />
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">with Digital Growth</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        We help you create, market, and grow your brand with data-driven strategies.
                    </p>
                    <a href="#contact" className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-10 rounded-20px shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg">
                        Book Free Consultation
                    </a>
                </AnimatedSection>

                <AnimatedSection className="mt-16">
                     <div className="relative max-w-4xl mx-auto">
                        <img 
                            src="https://picsum.photos/seed/marketing/1200/600" 
                            alt="Marketing Analytics Dashboard"
                            className="rounded-20px shadow-2xl"
                        />
                        <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-white/50 backdrop-blur-md rounded-20px p-4 shadow-lg hidden md:block">
                            <p className="font-bold text-secondary text-4xl">+300%</p>
                            <p className="text-gray-600 text-sm">Client ROI</p>
                        </div>
                     </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Hero;
