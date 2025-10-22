
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { CreativeIcon, AnalyticsIcon, GrowthIcon } from './Icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-20px shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
            <span className="text-secondary">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        We Blend <span className="text-secondary">Creativity</span> and <span className="text-secondary">Strategy</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        At Adya Digital, we are a passionate team of creators, marketers, and strategists dedicated to helping businesses reach their next level of growth and build powerful digital brands.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon={<CreativeIcon className="w-8 h-8" />}
                            title="Creativity"
                            description="Crafting compelling narratives and stunning visuals that captivate your audience."
                        />
                        <FeatureCard 
                            icon={<AnalyticsIcon className="w-8 h-8" />}
                            title="Analytics"
                            description="Leveraging data to make informed decisions and optimize for maximum impact."
                        />
                         <FeatureCard 
                            icon={<GrowthIcon className="w-8 h-8" />}
                            title="Growth"
                            description="Implementing scalable strategies that drive measurable results and long-term success."
                        />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default About;
