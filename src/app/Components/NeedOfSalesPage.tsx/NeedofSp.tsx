"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedRocket from "./AnimatedRocket";

const NeedofSp = ({ language }: any) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
          {/* Animated Rocket with realistic flame */}
          <div className="flex-shrink-0">
            <AnimatedRocket />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {language["need_a_stunning_landing_page"]}
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-2 italic">
              {language["launching_a_product"]}
            </p>
            <p className="text-white/80 text-base md:text-lg">
              {language["specialize_in_high_converting_landing_pages"]}
            </p>
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://wa.link/zlze49"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            {language["lets_talk"]}
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default NeedofSp;

