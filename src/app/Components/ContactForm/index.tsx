"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Send, User, Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { usePerformance } from "@/contexts/PerformanceContext";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = ({ language }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("Submit");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const { isLowPerformance } = usePerformance();

  const validateEmail = (email: string) =>
    emailRegex.test(email)
      ? (setEmailError(""), true)
      : (setEmailError(language["email_error"] || "Please enter a valid email"), false);

  const validateForm = () => {
    let ok = true;
    if (!name.trim()) {
      setNameError(language["name_required"] || "Name is required");
      ok = false;
    } else setNameError("");

    if (!email.trim()) {
      setEmailError(language["email_required"] || "Email is required");
      ok = false;
    } else if (!validateEmail(email)) ok = false;

    if (!message.trim()) {
      setMessageError(language["message_required"] || "Message is required");
      ok = false;
    } else setMessageError("");

    return ok;
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(language["loading"] || "Sending...");
    try {
      await fetch(`https://formsubmit.co/ajax/bilalahmedfarooqi03@gmail.com`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, message, email }),
      });

      setLoading(language["submitted_successfully"] || "Sent!");
      setFormSuccess(true);
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setLoading("Submit");
        setFormSuccess(false);
      }, 3000);
    } catch {
      setLoading(language["error"] || "Error");
      setTimeout(() => setLoading("Submit"), 3000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: language["email_label"] || "Email", value: "bilalahmedfarooqi03@gmail.com" },
    { icon: MapPin, label: language["location_label"] || "Location", value: language["karachi_pk"] || "Karachi, Pakistan" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={isLowPerformance ? undefined : { opacity: 1, y: 0 }}
          animate={isLowPerformance ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={isLowPerformance ? undefined : { opacity: 1, scale: 1 }}
            animate={isLowPerformance ? { opacity: 1, scale: 1 } : undefined}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6"
          >
            <div className={`w-2 h-2 rounded-full bg-blue-500 ${!isLowPerformance && "animate-pulse"}`} />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {language["contact_badge"] || "Let's Connect"}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400">
              {language["get_in_touch"] || "Get In Touch"}
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
            {language["contact_subtitle"] || "Have a question or want to work together? Drop me a message!"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={isLowPerformance ? undefined : { opacity: 1, x: 0 }}
            animate={isLowPerformance ? { opacity: 1, x: 0 } : undefined}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{language["contact_information"] || "Contact Information"}</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                      <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.link/zlze49"
              target="_blank"
              rel="noreferrer"
              className="block bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <FaWhatsapp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{language["discuss_on_whatsapp"] || "Chat on WhatsApp"}</h4>
                  <p className="text-green-100 text-sm">{language["quick_response"] || "Quick response guaranteed"}</p>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={isLowPerformance ? undefined : { opacity: 1, x: 0 }}
            animate={isLowPerformance ? { opacity: 1, x: 0 } : undefined}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-500" />
                {language["send_message"] || "Send a Message"}
              </h3>

              <form onSubmit={submitHandler} className="space-y-4">
                {/* Name Field */}
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    {language["name_label"] || "Name"}<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language["enter_name"] || "Enter your name"}
                    disabled={loading !== "Submit"}
                    className={`block bg-transparent w-full px-4 py-3 rounded-md border ${nameError ? 'border-red-500' : 'border-gray-400 dark:border-gray-600'} focus:outline-none focus:border-blue-500 transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500`}
                  />
                  {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
                </div>

                {/* Email Field */}
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    {language["email_label"] || "Email"}<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language["enter_email"] || "Enter your email"}
                    disabled={loading !== "Submit"}
                    className={`block bg-transparent w-full px-4 py-3 rounded-md border ${emailError ? 'border-red-500' : 'border-gray-400 dark:border-gray-600'} focus:outline-none focus:border-blue-500 transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500`}
                  />
                  {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>

                {/* Message Field */}
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    {language["message_label"] || "Message"}<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={language["enter_message"] || "Enter your message"}
                    disabled={loading !== "Submit"}
                    rows={5}
                    className={`block bg-transparent w-full px-4 py-3 rounded-md border ${messageError ? 'border-red-500' : 'border-gray-400 dark:border-gray-600'} focus:outline-none focus:border-blue-500 transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 resize-none`}
                  />
                  {messageError && <p className="text-red-500 text-sm mt-1">{messageError}</p>}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading !== "Submit"}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${formSuccess
                    ? "bg-green-500"
                    : "bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500"
                    }`}
                >
                  {!formSuccess && <Send className="w-5 h-5" />}
                  {loading}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
