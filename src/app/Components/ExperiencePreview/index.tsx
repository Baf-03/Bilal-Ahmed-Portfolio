"use client";

import React from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, Code2, Database, Rocket } from "lucide-react";
import { usePerformance } from "@/contexts/PerformanceContext";

export default function ExperiencePreview({ language }: any) {
    const { isLowPerformance } = usePerformance();

    const highlights = [
        { icon: <Database className="w-4 h-4" />, text: language?.["exp_backend"] || "Backend Architecture & Microservices" },
        { icon: <Code2 className="w-4 h-4" />, text: language?.["exp_fullstack"] || "Full Stack & ERP Development" },
        { icon: <Rocket className="w-4 h-4" />, text: language?.["exp_performance"] || "Performance Optimization & SEO" },
    ];

    return (
        <section className="w-full py-16 px-4 md:px-0 relative z-10" id="experience-preview">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden group"
                >
                    {/* Ambient Glow */}
                    {!isLowPerformance && (
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-500/30 transition-colors duration-700"></div>
                    )}

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 shadow-sm">
                                <Briefcase className="w-4 h-4 text-blue-500" />
                                <span className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400">
                                    {language?.["professional_experience"] || "Professional Experience"}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                                {language?.["exp_title_part1"] || "Senior Engineering"} <br className="hidden lg:block" />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                                    {language?.["exp_title_part2"] || "Journey & Impact"}
                                </span>
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
                                {language?.["exp_description"] || "Discover my detailed career history, from designing AI-powered microservices to optimizing high-scale ERP platforms and leading frontend architecture."}
                            </p>

                            <div className="flex flex-col gap-4 mb-8">
                                {highlights.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-blue-500 border border-gray-200 dark:border-gray-700 shadow-sm">
                                            {item.icon}
                                        </span>
                                        {item.text}
                                    </div>
                                ))}
                            </div>

                            <NextLink
                                href="/experience"
                                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 group/btn"
                            >
                                <span>{language?.["view_details"] || "View Full Experience"}</span>
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </NextLink>
                        </div>

                        {/* Visual Element Mockup (Only visible on Desktop) */}
                        <div className="hidden md:flex w-2/5 justify-center relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>

                            <div className="relative w-full max-w-[280px] aspect-[3/4] bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl border border-blue-500/20 shadow-2xl p-6 flex flex-col transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">

                                {/* Theme Pulse Indicator */}
                                <div className="absolute top-4 right-4 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                </div>

                                {/* User Profile Header */}
                                <div className="flex items-center gap-3 mb-6 mt-2">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-teal-400 p-[2px]">
                                        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                                            <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">BA</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900 dark:text-white leading-tight">Bilal Ahmed</div>
                                        <div className="text-xs text-blue-600 dark:text-blue-400 font-medium tracking-tight">Software Engineer</div>
                                    </div>
                                </div>

                                {/* Experience Mini-Blocks */}
                                <div className="space-y-4 flex-1 mt-2">
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{language?.["exp_arch_scale"] || "Architecture & Scale"}</div>
                                        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                        <div className="w-5/6 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                        <div className="w-4/6 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{language?.["exp_product_innovation"] || "Product Innovation"}</div>
                                        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                        <div className="w-3/4 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Tech Stack Pills */}
                                <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                                    <div className="flex flex-wrap gap-1.5">
                                        <span className="text-[9px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">Frontend</span>
                                        <span className="text-[9px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">Backend</span>
                                        <span className="text-[9px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">DevOps</span>
                                        <span className="text-[9px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">AI/ML</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
