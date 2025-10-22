
import React from 'react';
import { Service } from '../types';
import AnimatedSection from './AnimatedSection';
import { BrandingIcon, ContentCreationIcon, SocialMediaIcon, PerformanceAdsIcon, GrowthStrategyIcon } from './Icons';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="group bg-white p-8 rounded-20px shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        <div className="relative">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 text-secondary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/20 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
        </div>
    </div>
);

const Services: React.FC = () => {
    const services: Service[] = [
        {
            icon: <BrandingIcon className="w-8 h-8" />,
            title: 'Branding & Design',
            description: 'Crafting unique brand identities and stunning visuals that resonate with your audience.',
        },
        {
            icon: <ContentCreationIcon className="w-8 h-8" />,
            title: 'Content Creation',
            description: 'Producing high-quality photos, videos, and reels that tell your brand’s story.',
        },
        {
            icon: <SocialMediaIcon className="w-8 h-8" />,
            title: 'Social Media Marketing',
            description: 'Building and engaging your community across all major social platforms.',
        },
        {
            icon: <PerformanceAdsIcon className="w-8 h-8" />,
            title: 'Performance Ads',
            description: 'Running data-driven ad campaigns that deliver measurable ROI on Google, Meta, etc.',
        },
        {
            icon: <GrowthStrategyIcon className="w-8 h-8" />,
            title: 'Growth Consulting',
            description: 'Developing bespoke strategies to overcome challenges and achieve sustainable growth.',
        },
    ];

    return (
        <section id="services" className="py-20 bg-light-gray">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We offer a comprehensive suite of services to cover all your digital marketing needs.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Services;
