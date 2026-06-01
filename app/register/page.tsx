import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
    title: 'Register for HackNova 2026',
    description:
        'Register your team for HackNova 2026 — a free 24-hour national AI hackathon at IIT Tirupati, Aug 8 — 9, 2026.',
    alternates: { canonical: '/register' },
    robots: {
        // Page is just a redirect — let crawlers follow but don't index the empty body
        index: false,
        follow: true,
    },
};

export default function Register() {
    redirect(SITE.event.registerUrl);
}
