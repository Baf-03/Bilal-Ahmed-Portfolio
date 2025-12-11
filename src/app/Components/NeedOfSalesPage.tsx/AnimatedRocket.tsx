"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedRocket = () => {
    return (
        <div
            className="relative w-40 h-40 md:w-48 md:h-48"
            style={{ transform: "rotate(-35deg)" }}
        >
            {/* Outer glow effect */}
            <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-orange-500/50 via-yellow-400/40 to-red-500/30 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Secondary inner glow */}
            <motion.div
                className="absolute inset-2 bg-gradient-to-b from-yellow-300/40 via-orange-400/30 to-transparent rounded-full blur-2xl"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                }}
            />

            <svg
                viewBox="0 0 100 150"
                className="w-full h-full relative z-10 drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.3))" }}
            >
                {/* Definitions for gradients */}
                <defs>
                    {/* 3D Rocket body gradient - metallic effect */}
                    <linearGradient id="rocketBody3D" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#94a3b8" />
                        <stop offset="20%" stopColor="#e2e8f0" />
                        <stop offset="40%" stopColor="#ffffff" />
                        <stop offset="60%" stopColor="#f1f5f9" />
                        <stop offset="80%" stopColor="#cbd5e1" />
                        <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>

                    {/* Rocket nose gradient - 3D blue */}
                    <linearGradient id="rocketNose3D" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="30%" stopColor="#3b82f6" />
                        <stop offset="70%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>

                    {/* Flame outer gradient */}
                    <linearGradient id="flameOuter" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="40%" stopColor="#ea580c" />
                        <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>

                    {/* Flame middle gradient */}
                    <linearGradient id="flameMiddle" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>

                    {/* Flame inner gradient */}
                    <linearGradient id="flameInner" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fef3c7" />
                        <stop offset="50%" stopColor="#fde68a" />
                        <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>

                    {/* Window gradient - 3D glass effect */}
                    <radialGradient id="windowGradient3D" cx="30%" cy="30%">
                        <stop offset="0%" stopColor="#bfdbfe" />
                        <stop offset="30%" stopColor="#93c5fd" />
                        <stop offset="70%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1e40af" />
                    </radialGradient>

                    {/* Fin gradient - 3D */}
                    <linearGradient id="finGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>

                    {/* Body shadow for 3D effect */}
                    <linearGradient id="bodyShadow" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
                    </linearGradient>

                    {/* Glow filter for flames */}
                    <filter id="flameGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* 3D shadow filter */}
                    <filter id="shadow3D" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.3)" />
                    </filter>
                </defs>

                {/* Rocket Group with subtle floating animation */}
                <motion.g
                    filter="url(#shadow3D)"
                    animate={{
                        y: [-2, 2, -2],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {/* Left Fin - 3D with animation */}
                    <motion.path
                        d="M 28 65 Q 15 70 20 88 L 34 75 Z"
                        fill="url(#finGradient3D)"
                        animate={{
                            d: [
                                "M 28 65 Q 15 70 20 88 L 34 75 Z",
                                "M 28 65 Q 12 73 18 92 L 34 75 Z",
                                "M 28 65 Q 15 70 20 88 L 34 75 Z",
                            ],
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    {/* Left fin highlight */}
                    <path
                        d="M 30 67 Q 22 70 26 78 L 33 74 Z"
                        fill="rgba(255,255,255,0.3)"
                    />

                    {/* Right Fin - 3D with animation */}
                    <motion.path
                        d="M 72 65 Q 85 70 80 88 L 66 75 Z"
                        fill="url(#finGradient3D)"
                        animate={{
                            d: [
                                "M 72 65 Q 85 70 80 88 L 66 75 Z",
                                "M 72 65 Q 88 73 82 92 L 66 75 Z",
                                "M 72 65 Q 85 70 80 88 L 66 75 Z",
                            ],
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Rocket Body - 3D metallic */}
                    <path
                        d="M 35 78 L 35 38 Q 35 22 50 8 Q 65 22 65 38 L 65 78 Q 50 83 35 78"
                        fill="url(#rocketBody3D)"
                        stroke="#94a3b8"
                        strokeWidth="0.5"
                    />

                    {/* Body 3D shading - left side shadow */}
                    <path
                        d="M 35 78 L 35 38 Q 35 22 50 8 Q 42 18 40 38 L 40 76 Q 37 77 35 78"
                        fill="url(#bodyShadow)"
                    />

                    {/* Body highlight - right side */}
                    <path
                        d="M 55 12 Q 62 20 62 38 L 62 76"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="2"
                    />

                    {/* Rocket Nose Tip - 3D */}
                    <path
                        d="M 42 33 Q 42 20 50 8 Q 58 20 58 33 Q 50 38 42 33"
                        fill="url(#rocketNose3D)"
                    />

                    {/* Nose highlight */}
                    <path
                        d="M 46 12 Q 48 18 48 28"
                        fill="none"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />

                    {/* Window - 3D glass effect */}
                    <circle
                        cx="50"
                        cy="50"
                        r="11"
                        fill="url(#windowGradient3D)"
                        stroke="#1e40af"
                        strokeWidth="2.5"
                    />

                    {/* Window outer ring for depth */}
                    <circle
                        cx="50"
                        cy="50"
                        r="13"
                        fill="none"
                        stroke="#64748b"
                        strokeWidth="1"
                    />

                    {/* Window shine - glass reflection */}
                    <ellipse cx="45" cy="45" rx="4" ry="3" fill="white" opacity="0.7" />
                    <ellipse cx="53" cy="53" rx="2" ry="1.5" fill="white" opacity="0.3" />

                    {/* Body stripes - 3D */}
                    <rect x="38" y="63" width="24" height="4" rx="1.5" fill="#ef4444" />
                    <rect x="39" y="63" width="10" height="1" rx="0.5" fill="rgba(255,255,255,0.3)" />

                    <rect x="38" y="70" width="24" height="2" rx="1" fill="#3b82f6" />
                    <rect x="39" y="70" width="8" height="0.5" rx="0.25" fill="rgba(255,255,255,0.3)" />

                    {/* Bottom engine part - more 3D */}
                    <path
                        d="M 38 78 L 38 86 Q 50 90 62 86 L 62 78"
                        fill="#475569"
                        stroke="#334155"
                        strokeWidth="0.5"
                    />
                    {/* Engine highlight */}
                    <path
                        d="M 40 78 L 40 84 Q 45 86 50 86"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1"
                    />

                    {/* Engine nozzle */}
                    <ellipse cx="50" cy="86" rx="10" ry="3" fill="#334155" />
                    <ellipse cx="50" cy="86" rx="7" ry="2" fill="#1e293b" />
                    <ellipse cx="48" cy="85" rx="2" ry="0.8" fill="rgba(255,255,255,0.1)" />
                </motion.g>

                {/* Flame Group - positioned at bottom of rocket */}
                <g filter="url(#flameGlow)">
                    {/* Outer Flame - Largest, slowest animation */}
                    <motion.path
                        fill="url(#flameOuter)"
                        opacity="0.9"
                        animate={{
                            d: [
                                "M 42 86 Q 32 102 36 120 Q 42 138 50 148 Q 58 138 64 120 Q 68 102 58 86 Q 50 90 42 86",
                                "M 42 86 Q 28 108 38 125 Q 44 145 50 155 Q 56 145 62 125 Q 72 108 58 86 Q 50 90 42 86",
                                "M 42 86 Q 35 98 34 118 Q 40 135 50 145 Q 60 135 66 118 Q 65 98 58 86 Q 50 90 42 86",
                                "M 42 86 Q 32 102 36 120 Q 42 138 50 148 Q 58 138 64 120 Q 68 102 58 86 Q 50 90 42 86",
                            ],
                        }}
                        transition={{
                            duration: 0.25,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Middle Flame - Medium size, medium speed */}
                    <motion.path
                        fill="url(#flameMiddle)"
                        opacity="0.95"
                        animate={{
                            d: [
                                "M 44 86 Q 38 98 42 112 Q 46 125 50 135 Q 54 125 58 112 Q 62 98 56 86 Q 50 89 44 86",
                                "M 44 86 Q 35 102 44 118 Q 47 132 50 142 Q 53 132 56 118 Q 65 102 56 86 Q 50 89 44 86",
                                "M 44 86 Q 40 95 38 108 Q 44 120 50 130 Q 56 120 62 108 Q 60 95 56 86 Q 50 89 44 86",
                                "M 44 86 Q 38 98 42 112 Q 46 125 50 135 Q 54 125 58 112 Q 62 98 56 86 Q 50 89 44 86",
                            ],
                        }}
                        transition={{
                            duration: 0.18,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Inner Flame - Smallest, fastest animation */}
                    <motion.path
                        fill="url(#flameInner)"
                        animate={{
                            d: [
                                "M 46 86 Q 43 94 45 105 Q 47 115 50 125 Q 53 115 55 105 Q 57 94 54 86 Q 50 88 46 86",
                                "M 46 86 Q 41 97 46 110 Q 48 120 50 130 Q 52 120 54 110 Q 59 97 54 86 Q 50 88 46 86",
                                "M 46 86 Q 44 92 43 102 Q 46 112 50 122 Q 54 112 57 102 Q 56 92 54 86 Q 50 88 46 86",
                                "M 46 86 Q 43 94 45 105 Q 47 115 50 125 Q 53 115 55 105 Q 57 94 54 86 Q 50 88 46 86",
                            ],
                        }}
                        transition={{
                            duration: 0.12,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Core Flame - Brightest center, white hot */}
                    <motion.ellipse
                        cx="50"
                        cy="98"
                        rx="5"
                        ry="12"
                        fill="#fffbeb"
                        opacity="0.95"
                        animate={{
                            ry: [12, 16, 10, 12],
                            opacity: [0.95, 1, 0.9, 0.95],
                        }}
                        transition={{
                            duration: 0.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </g>

                {/* Spark particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.circle
                        key={i}
                        r="2"
                        fill={i % 2 === 0 ? "#fbbf24" : "#f97316"}
                        animate={{
                            cx: [50 + (i - 4) * 4, 50 + (i - 4) * 8 + Math.sin(i) * 5],
                            cy: [100, 145 + i * 5],
                            opacity: [1, 0],
                            r: [2, 0.5],
                        }}
                        transition={{
                            duration: 0.7,
                            repeat: Infinity,
                            delay: i * 0.08,
                            ease: "easeOut",
                        }}
                    />
                ))}

                {/* Additional ember particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.circle
                        key={`ember-${i}`}
                        r="1.5"
                        fill="#ef4444"
                        animate={{
                            cx: [47 + i * 2, 42 + i * 5 + Math.cos(i) * 6],
                            cy: [105, 150 + i * 4],
                            opacity: [0.8, 0],
                            r: [1.5, 0.3],
                        }}
                        transition={{
                            duration: 0.9,
                            repeat: Infinity,
                            delay: 0.35 + i * 0.12,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default AnimatedRocket;
