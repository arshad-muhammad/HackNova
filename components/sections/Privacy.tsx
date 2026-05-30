"use client";

import { motion } from 'motion/react';

export default function Privacy() {
    return (
        <section className="pt-40 pb-20 container mx-auto px-6 max-w-4xl min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-space-purple mb-8">
                    Privacy Policy
                </h1>
                <div className="prose prose-invert prose-violet max-w-none font-light leading-relaxed space-y-6">
                    <p>
                        Your privacy is critically important to us. This Privacy Policy outlines the types of personal information that is received and collected by the HackNova organizing team and how it is used.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white uppercase tracking-wider">Information We Collect</h2>
                    <p>
                        We collect information from you when you register on our site via Unstop, subscribe to our newsletter, or fill out a form. When registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address, phone number, and university/college details.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white uppercase tracking-wider">How We Use Your Information</h2>
                    <p>
                        Any of the information we collect from you may be used in one of the following ways:
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>To personalize your experience.</li>
                            <li>To improve our website functionality and offerings.</li>
                            <li>To process transactions and registration.</li>
                            <li>To send periodic emails regarding updates and event communication.</li>
                        </ul>
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white uppercase tracking-wider">Data Sharing</h2>
                    <p>
                        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
