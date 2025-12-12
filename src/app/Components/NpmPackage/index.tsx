"use client";

import React, { useState } from "react";
import {
    Package,
    Terminal,
    Copy,
    Check,
    ExternalLink,
    Zap,
    Database,
    Shield,
    Radio,
    CreditCard,
    Cloud,
    Github,
    Download,
    Code2,
    Sparkles,
    Rocket
} from "lucide-react";
import Link from "next/link";

const features = [
    { icon: <Zap className="w-5 h-5" />, name: "Express 5", desc: "Async error handling" },
    { icon: <Code2 className="w-5 h-5" />, name: "TypeScript", desc: "Full type safety" },
    { icon: <Database className="w-5 h-5" />, name: "Prisma 7", desc: "PostgreSQL ORM" },
    { icon: <Shield className="w-5 h-5" />, name: "Auth Ready", desc: "JWT, OTP, OAuth" },
    { icon: <Radio className="w-5 h-5" />, name: "Socket.IO", desc: "Real-time communication" },
    { icon: <CreditCard className="w-5 h-5" />, name: "Stripe", desc: "Payment integration" },
    { icon: <Cloud className="w-5 h-5" />, name: "Cloudinary", desc: "Image uploads" },
    { icon: <Package className="w-5 h-5" />, name: "Docker", desc: "Container ready" },
];

export default function NpmPackage({ language }: { language: any }) {
    const [copied, setCopied] = useState(false);
    const installCommand = "npx create-baf-app my-app";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(installCommand);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <section className="py-12 md:py-24 px-4 w-full" id="npm-package">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-4 md:mb-6">
                        <Package className="w-4 h-4 text-blue-500" />
                        <span className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400">
                            {language["open_source"] || "Open Source Package"}
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                            create-baf-app
                        </span>
                    </h2>

                    {/* Main Tagline */}
                    <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                        {language["npm_description"] || "Create production-grade Backend Apps without Nest.js complications"}
                    </p>

                    {/* Secondary Description */}
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-500 dark:text-gray-500">
                        <Rocket className="w-4 h-4 text-blue-500" />
                        <span>Express + TypeScript boilerplate with a single command</span>
                    </div>
                </div>

                {/* Main Card */}
                <div className="relative group">
                    {/* Gradient Border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-10 shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                            {/* Left Side - Install & Info */}
                            <div>
                                {/* Quick Install */}
                                <div className="mb-8">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                        <Terminal className="w-5 h-5 text-blue-500" />
                                        Quick Start
                                    </h3>

                                    <div className="relative">
                                        <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm md:text-base overflow-x-auto">
                                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                                                <span className="text-teal-400">$</span>
                                                <span className="text-gray-300"># Using npx (recommended)</span>
                                            </div>
                                            <div className="flex items-center justify-between gap-4">
                                                <code className="text-blue-400 whitespace-nowrap">{installCommand}</code>
                                                <button
                                                    onClick={handleCopy}
                                                    className="flex-shrink-0 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                                                    aria-label="Copy command"
                                                >
                                                    {copied ? (
                                                        <Check className="w-4 h-4 text-teal-400" />
                                                    ) : (
                                                        <Copy className="w-4 h-4 text-gray-400" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                        {copied && (
                                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-teal-500 font-medium">
                                                Copied to clipboard!
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    <div className="text-center p-3 md:p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                        <div className="text-xl md:text-2xl font-bold text-blue-500">v1.0.1</div>
                                        <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Version</div>
                                    </div>
                                    <div className="text-center p-3 md:p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                        <div className="text-xl md:text-2xl font-bold text-blue-500">MIT</div>
                                        <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">License</div>
                                    </div>
                                    <div className="text-center p-3 md:p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                        <div className="text-xl md:text-2xl font-bold text-blue-500">142KB</div>
                                        <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Size</div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-3">
                                    <Link
                                        href="https://www.npmjs.com/package/create-baf-app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base"
                                    >
                                        <Download className="w-4 h-4" />
                                        View on npm
                                        <ExternalLink className="w-3 h-3" />
                                    </Link>
                                    <Link
                                        href="https://github.com/baf-03/create-baf-app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base"
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </Link>
                                </div>
                            </div>

                            {/* Right Side - Features */}
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-teal-500" />
                                    What's Included
                                </h3>

                                <div className="grid grid-cols-2 gap-3">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-3 md:p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg flex items-center justify-center text-blue-500">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
                                                    {feature.name}
                                                </div>
                                                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                    {feature.desc}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Author Section */}
                        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white font-bold">
                                        BA
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">Bilal Ahmed</div>
                                        <Link
                                            href="https://github.com/baf-03"
                                            target="_blank"
                                            className="text-sm text-blue-500 hover:underline"
                                        >
                                            @baf-03
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span>Made with</span>
                                    <span className="text-red-500">❤</span>
                                    <span>for developers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
