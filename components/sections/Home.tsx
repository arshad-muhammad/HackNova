"use client";

import React, { useEffect } from 'react';
import Hero from '../ui/Hero';
import Stats from '../ui/Stats';
import About from '../ui/About';
import Challenge from '../ui/Challenge';
import Timeline from '../ui/Timeline';
import Sponsors from '../ui/Sponsors';
import FAQ from '../ui/FAQ';
import CTA from '../ui/CTA';
import SphereHive from '../ui/SphereHive';

export default function Home() {
    useEffect(() => {
        // Track visitors
        fetch('/api/track', { method: 'POST' }).catch(() => { });
    }, []);

    return (
        <>
            <Hero />
            <Stats />
            <About />
            <Challenge />
            <Timeline />
            <Sponsors />
            <FAQ />
            <CTA />
            <SphereHive />
        </>
    );
}
