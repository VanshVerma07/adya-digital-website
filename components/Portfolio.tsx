
import React from 'react';
import { Project } from '../types';
import AnimatedSection from './AnimatedSection';
import { ArrowRightIcon } from './Icons';


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="group bg-white rounded-20px shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
        <div className="relative">
            <img src={project.image} alt={project.title} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute top-4 right-4 bg-primary text-secondary font-bold py-2 px-4 rounded-20px text-sm">
                <p>{project.metric}</p>
                <p className="text-lg">{project.metricValue}</p>
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href="#" className="font-bold text-secondary inline-flex items-center">
                View Case Study <ArrowRightIcon className="w-4 h-4 ml-2" />
            </a>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
    const projects: Project[] = [
        { image: 'https://picsum.photos/seed/project1/400/300', title: 'Fintech Startup Branding', description: 'Complete brand overhaul for a rising fintech player.', metric: 'User Growth', metricValue: '+150%' },
        { image: 'https://picsum.photos/seed/project2/400/300', title: 'E-commerce Social Campaign', description: 'Viral reels campaign for a D2C fashion brand.', metric: 'Engagement', metricValue: '+500K' },
        { image: 'https://picsum.photos/seed/project3/400/300', title: 'SaaS Performance Marketing', description: 'Lead generation campaign on LinkedIn and Google Ads.', metric: 'Leads', metricValue: '+3X MQLs' },
    ];

    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Work</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Here's a glimpse of the success stories we've helped create.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </AnimatedSection>
                <AnimatedSection className="text-center mt-16">
                    <button className="bg-white border-2 border-secondary text-secondary font-bold py-3 px-8 rounded-20px shadow-md hover:bg-secondary hover:text-white transition-all duration-300">
                        View More Projects
                    </button>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Portfolio;
