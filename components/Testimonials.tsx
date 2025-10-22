
import React from 'react';
import { Testimonial } from '../types';
import AnimatedSection from './AnimatedSection';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-20px shadow-lg border-l-4 border-primary">
        <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
        <div className="flex items-center">
            <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 object-cover" />
            <div>
                <p className="font-bold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-secondary">{testimonial.company}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            quote: "Adya Digital transformed our social media presence. Their creative content and strategic approach led to a 200% increase in engagement. Highly recommended!",
            author: "Priya Sharma",
            company: "CEO, InnovateTech",
            avatar: "https://picsum.photos/seed/person1/100/100",
        },
        {
            quote: "The branding and design work they did for us was exceptional. They perfectly captured our vision and helped us stand out in a crowded market.",
            author: "Rohan Verma",
            company: "Founder, UrbanStyle Co.",
            avatar: "https://picsum.photos/seed/person2/100/100",
        },
        {
            quote: "Their performance marketing campaigns have been a game-changer for our lead generation. The results speak for themselves. A truly data-driven team.",
            author: "Anjali Mehta",
            company: "Marketing Head, GrowthLeap",
            avatar: "https://picsum.photos/seed/person3/100/100",
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-light-gray">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We are proud to have partnered with amazing businesses.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Testimonials;
