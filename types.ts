
import React from 'react';

export interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface Project {
    image: string;
    title: string;
    description: string;
    metric: string;
    metricValue: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    company: string;
    avatar: string;
}
