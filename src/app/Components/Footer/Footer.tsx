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
    <div className="w-full mb-2">
      <div className="w-full  rounded-3xl overflow-hidden !shadow-2xl border-y-2 border-blue-800">
        <div className="p-6 sm:p-8 md:p-12 pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Logo and Subscribe Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col gap-6">
                <div className="mt-2 sm:mt-4">
                  <h3 className="text-xl font-semibold mb-2">{language["subscribe_for_insights"]}</h3>
                  <p className="text-sm mb-4">{language["subscribe_description"]}</p>

                  <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="w-[100%] 3xl:text-[1.5rem] ">
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
                          className="block bg-transparent w-full px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-[#3b82f6] disabled:opacity-50"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        className="bg-[#1e5aed] hover:bg-[#1e4ed8] text-white px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
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
                          language["subscribe_button"]
                        )}
                      </button>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <p className="text-red-500 text-xs mt-1">{error}</p>
                    )}

                    {/* Success Message */}
                    {isSuccess && (
                      <p className="text-green-500 text-xs mt-1">
                        {language["subscription_success"] || "Thank you for subscribing! 🎉"}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{language["quick_links"]}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {language["home"]}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {language["features"]}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {language["pricing"]}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {language["blog"]}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {language["contact"]}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div className="sm:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{language["explore"]}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {language["dev_ideas"]}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {language["ai_blogs"]}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {language["successful_products"]}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {language["faqs"]}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="sm:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{language["support"]}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="" className="text-gray-600 hover:text-gray-900 text-sm">
                    {language["help_center"]}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {language["terms_of_service"]}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {language["privacy_policy"]}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bar - elegant, modern design with smooth animations and enhanced UX */}
        <footer role="contentinfo" aria-label="Site footer" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white mt-10 sm:mt-16 py-8 px-6 rounded-b-3xl border-t border-slate-700 shadow-2xl relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Copyright and branding section */}
              <div className="flex flex-col lg:flex-row items-center gap-3 text-center lg:text-left">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">BA</span>
                  </div>
                  <p className="text-sm font-medium text-gray-200">
                    © {new Date().getFullYear()} Bilal Ahmed
                  </p>
                </div>
                <span className="hidden lg:block text-slate-400">•</span>
                <p className="text-xs text-slate-300 italic">
                  Crafting digital experiences with passion
                </p>
              </div>

              {/* Social media links with enhanced interactions */}
              <nav aria-label="Social media links" className="flex items-center gap-4">
                <Link
                  href="#"
                  className="group relative p-3 bg-slate-800/50 hover:bg-blue-600 rounded-xl transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  aria-label="Visit Facebook"
                >
                  <Facebook size={18} className="text-slate-300 group-hover:text-white transition-colors duration-200" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="#"
                  className="group relative p-3 bg-slate-800/50 hover:bg-sky-500 rounded-xl transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25"
                  aria-label="Visit Twitter"
                >
                  <Twitter size={18} className="text-slate-300 group-hover:text-white transition-colors duration-200" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="#"
                  className="group relative p-3 bg-slate-800/50 hover:bg-pink-500 rounded-xl transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                  aria-label="Visit Instagram"
                >
                  <Instagram size={18} className="text-slate-300 group-hover:text-white transition-colors duration-200" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </nav>
            </div>

            {/* Bottom accent line */}
            <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
