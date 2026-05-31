import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import StarField from '@/components/ui/StarField';
import ScrollProgress from '@/components/ui/ScrollProgress';
import IntroSplash from '@/components/ui/IntroSplash';
import './globals.css';

export const metadata = {
    title: 'HackNova 2026 | National Level AI Hackathon at VTU Belagavi',
    description:
        'Join HackNova 2026, a premier 24-hour national Artificial Intelligence hackathon organized by Sphere Hive at VTU Belagavi. Push the limits of AI and build innovative solutions.',
    keywords: [
        'Hackathon 2026', 'AI Hackathon', 'Artificial Intelligence', 'VTU Belagavi',
        'Machine Learning', 'Coding Competition India', 'Tech Fest Karnataka',
        'Sphere Hive', '24 hour coding', 'Data-Centric AI', '3LC.ai',
    ],
    authors: [{ name: 'Sphere Hive' }],
    openGraph: {
        title: 'HackNova 2026 | National Level AI Hackathon',
        description:
            'Join the premier 24-hour Artificial Intelligence hackathon at VTU Belagavi. Compete with the best minds in tech to build transformative AI solutions.',
        url: 'https://unstop.com/p/hackaithon-2026-joy-university-1675805',
        siteName: 'HackNova',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'HackNova 2026 Banner',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'HackNova 2026 | National Level AI Hackathon',
        description:
            'Join the premier 24-hour Artificial Intelligence hackathon at VTU Belagavi. Compete with the best minds in tech.',
        images: ['/logo.png'],
    },
    icons: {
        icon: [
            { url: '/logo.ico', sizes: '32x32' },
            { url: '/logo.ico', sizes: 'any' },
        ],
        apple: '/logo.ico',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-space-black text-white font-sans selection:bg-space-purple selection:text-white relative flex flex-col">
                {/* First-paint intro splash (2.5s editorial counter) */}
                <IntroSplash />

                {/* Ambient cosmic backdrop (canvas stars + aurora + grid + grain) */}
                <StarField />

                {/* Top-of-page scroll progress bar */}
                <ScrollProgress />

                {/* Side rails */}
                <div className="fixed bottom-10 left-10 [writing-mode:vertical-rl] rotate-180 text-[10px] font-mono tracking-[0.4em] uppercase text-white/25 z-40 pointer-events-none hidden lg:block">
                    Coded · in · the · cosmos
                </div>
                <div className="fixed bottom-10 right-10 [writing-mode:vertical-rl] text-[10px] font-mono tracking-[0.4em] uppercase text-white/25 z-40 pointer-events-none hidden lg:block">
                    Navigate · the · stars
                </div>

                <Navbar />
                <main className="flex-grow relative z-10">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
