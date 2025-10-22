
import React from 'react';
import AnimatedSection from './AnimatedSection';

const CTASection: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
            <div className="container mx-auto px-6 text-center">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Grow Your Business?</h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                        Let’s discuss your goals and build a custom digital strategy that drives real results.
                    </p>
                    <a href="#contact" className="inline-block bg-white text-secondary font-bold py-4 px-10 rounded-20px shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg">
                        Book Free Consultation
                    </a>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default CTASection;
