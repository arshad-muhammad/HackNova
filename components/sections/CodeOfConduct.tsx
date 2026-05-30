"use client";

import { motion } from 'motion/react';

export default function CodeOfConduct() {
    return (
        <section className="pt-40 pb-20 container mx-auto px-6 max-w-4xl min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-space-purple mb-8">
                    Code of Conduct
                </h1>
                <div className="prose prose-invert prose-violet max-w-none font-light leading-relaxed space-y-6">
                    <p>
                        At HackNova, we are committed to providing a safe, inclusive, and harassment-free experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, or religion.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white uppercase tracking-wider">Respect and Discipline</h2>
                    <p>
                        Embrace the mission code of honor. Treat all participants, mentors, organizers, and judges with respect. Harassment of any kind will not be tolerated. This includes offensive verbal comments, sexual images in public spaces, intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, and unwelcome sexual attention.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white uppercase tracking-wider">Reporting</h2>
                    <p>
                        If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of event staff immediately. Staff will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the hackathon.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
