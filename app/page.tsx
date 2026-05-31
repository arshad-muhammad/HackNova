import type { Metadata } from 'next';
import Home from '@/components/sections/Home';
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';
import { FAQS } from '@/lib/faqs';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
    title:
        'HackNova 2026 · National AI Hackathon at VTU Belagavi · 24 Hours · Aug 8 — 9',
    description:
        'HackNova 2026 — a free 24-hour national AI hackathon by Sphere Hive at VTU Belagavi. Compete on a data-centric AI challenge with 3LC.ai. ₹30,000 prize pool, mentors, swag, and free .xyz domain for every participant.',
    alternates: { canonical: '/' },
};

export default function Page() {
    return (
        <>
            <FAQJsonLd items={FAQS} />
            <BreadcrumbJsonLd
                items={[{ name: 'Home', url: SITE.url }]}
            />
            <Home />
        </>
    );
}
