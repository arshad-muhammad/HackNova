import type { Metadata } from 'next';
import Admin from '@/components/sections/Admin';

// Admin must never appear in search results.
export const metadata: Metadata = {
    title: 'Mission Control',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: { index: false, follow: false, noimageindex: true },
    },
    alternates: { canonical: undefined },
};

export default function Page() {
    return <Admin />;
}
