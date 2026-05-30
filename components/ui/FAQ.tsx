"use client";

import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Who can participate?',
    answer: 'HackNova is open to all developers, designers, and visionaries. Whether you are a seasoned coder or a rising talent, you are welcome to join the event.'
  },
  {
    question: 'Is it team-based or solo?',
    answer: 'You can participate as a team of min 2 members and up to 4 members.'
  },
  {
    question: 'Does it cost anything to register?',
    answer: 'No. Entry to the event is completely free. Just bring your skills, your laptop, and your creativity.'
  },
  {
    question: 'What is the intellectual property policy?',
    answer: 'You own what you build. The code you forge during the hackathon remains your property entirely.'
  },
  {
    question: 'Will there be food and drinks?',
    answer: 'Yes. We will provide ample rations—meals, snacks, and caffeine—to keep your energy high throughout the 24-hour event.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-3xl">

        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-space-purple" />
            <span className="text-space-purple font-display tracking-widest uppercase text-[10px] font-extrabold">Knowledge Base</span>
            <span className="w-8 h-[1px] bg-space-purple" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[60px] md:text-[88px] font-black leading-[0.9] uppercase tracking-[-0.04em]"
          >
            SEEK <span className="text-space-purple">WISDOM</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel border border-white/5 overflow-hidden btn-cut"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-display tracking-wide text-white font-bold">{faq.question}</span>
                <div className={`w-8 h-8 flex items-center justify-center transition-colors btn-cut ${openIndex === index ? 'bg-space-purple text-white' : 'bg-white/5 text-gray-400'}`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[11px] text-ink-dim leading-[1.4]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
