"use client";

import { motion } from 'motion/react';

export default function Terms() {
    return (
        <section className="pt-40 pb-20 container mx-auto px-6 max-w-4xl min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-space-purple mb-8">
                    Terms & Conditions
                </h1>
                <div className="prose prose-invert prose-violet max-w-none font-light leading-relaxed space-y-6">
                    <p>
                        By accessing this website and registering for HackNova, you are agreeing to be bound by these website Terms and Conditions of Use, applicable laws and regulations, and their compliance. If you disagree with any of the stated terms and conditions, you are prohibited from using or accessing this site.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white uppercase tracking-wider">Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on HackNova's site for personal, non-commercial transitory viewing only. All code written during the event belongs to the creators, though sponsors may have specific rules regarding their designated bounty prizes.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white uppercase tracking-wider">Event Participation</h2>
                    <p>
                        Participants certify that they are eligible to participate and that all information provided during registration via Unstop is true and accurate. The organizers reserve the right to disqualify any team that violates the rules of the event or engages in unsportsmanlike conduct.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white uppercase tracking-wider">Limitations</h2>
                    <p>
                        In no event shall HackNova or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HackNova's Internet site.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
