"use client";

import { Facebook, Instagram, Twitter, CheckCircle, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Google Apps Script Web App URL - Replace with your deployed script URL
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

export default function Footer({ language }: any) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError(language["invalid_email"] || "Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Send to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: "portfolio-website"
        }),
      });

      // With no-cors mode, we can't read the response, but if no error thrown, assume success
      setIsSuccess(true);
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      console.error("Subscription error:", err);
      setError(language["subscription_error"] || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#0a0f18] via-[#111827] to-[#0a0f18] text-white pt-20 pb-8 mt-12 rounded-t-[3rem] border-t border-blue-500/20 shadow-2xl">
      {/* Subtle Glow Overlays */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Logo and Subscribe Section (Takes up more space) */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  BA
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Bilal Ahmed
                </h2>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{language["subscribe_for_insights"] || "Join the Newsletter"}</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-sm">
                {language["subscribe_description"] || "Get notified about new development insights, AI articles, and free resources crafted for modern engineers."}
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 relative z-20">
                <div className="flex flex-col sm:flex-row gap-3 relative">
                  <div className="relative w-full sm:max-w-xs group">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur transition-opacity opacity-0 group-focus-within:opacity-100"></div>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder={language["enter_email"]}
                      disabled={isSubmitting || isSuccess}
                      className="relative block w-full bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-400 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all shadow-inner disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="relative group bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{language["subscribing"] || "Subscribing..."}</span>
                        </>
                      ) : isSuccess ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>{language["subscribed"] || "Subscribed!"}</span>
                        </>
                      ) : (
                        language["subscribe_button"] || "Subscribe"
                      )}
                    </span>
                  </button>
                </div>

                {/* Error / Success Messages */}
                <div className="h-4 mt-2">
                  {error && <p className="text-red-400 text-xs font-medium animate-pulse">{error}</p>}
                  {isSuccess && <p className="text-teal-400 text-xs font-medium">{language["subscription_success"] || "Thank you for subscribing! 🎉"}</p>}
                </div>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">{language["quick_links"] || "Quick Links"}</h3>
            <ul className="space-y-4">
              {['home', 'features', 'pricing', 'blog', 'contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-teal-400 text-sm font-medium transition-all hover:translate-x-1 inline-block">
                    {language[item] || item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">{language["explore"] || "Explore"}</h3>
            <ul className="space-y-4">
              {['dev_ideas', 'ai_blogs', 'successful_products', 'faqs'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-teal-400 text-sm font-medium transition-all hover:translate-x-1 inline-block">
                    {language[item] || item.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">{language["support"] || "Legal"}</h3>
            <ul className="space-y-4">
              {['help_center', 'terms_of_service', 'privacy_policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-teal-400 text-sm font-medium transition-all hover:translate-x-1 inline-block">
                    {language[item] || item.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="text-sm text-gray-400 font-medium">
              © {new Date().getFullYear()} Bilal Ahmed. All rights reserved.
            </p>
            <span className="hidden sm:block text-gray-600">•</span>
            <p className="text-xs text-gray-500 italic">
              Crafting digital experiences with passion.
            </p>
          </div>

          <nav aria-label="Social media links" className="flex items-center gap-3">
            {[
              { icon: Facebook, color: "hover:bg-blue-600", shadow: "hover:shadow-blue-500/25" },
              { icon: Twitter, color: "hover:bg-sky-500", shadow: "hover:shadow-sky-500/25" },
              { icon: Instagram, color: "hover:bg-pink-500", shadow: "hover:shadow-pink-500/25" }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <Link
                  key={idx}
                  href="#"
                  className={`group relative p-3 bg-white/5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} ${social.shadow} border border-white/5 hover:border-transparent`}
                >
                  <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
