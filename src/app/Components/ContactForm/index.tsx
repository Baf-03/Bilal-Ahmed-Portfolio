"use client"
import React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const FormInput = ({ label, type, value, onChange, placeholder, disabled, error, required = false }:any) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-sm font-medium mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <motion.input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`block bg-transparent w-full px-4 py-3 rounded-md border ${
            error ? "border-red-500" : isFocused ? "border-blue-500" : "border-gray-600"
          } focus:outline-none focus:border-blue-500 transition-all duration-200 text-white
[&:-webkit-autofill]:bg-transparent
[&:-webkit-autofill]:text-white
[&:-webkit-autofill]:[text-fill-color:white]
[&:-webkit-autofill]:[-webkit-text-fill-color:white]
[&:-webkit-autofill]:shadow-[0_0_0_1000px_rgba(0,0,0,0)_inset]
[&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s]`}
          whileFocus={{ scale: 1.01 }}
        />
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    </div>
  )
}

const FormTextarea = ({ label, value, onChange, placeholder, disabled, error, required = false }:any) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-sm font-medium mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <motion.textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full h-32 px-4 py-3 rounded-md border ${
            error ? "border-red-500" : isFocused ? "border-blue-500" : "border-gray-600"
          } focus:outline-none focus:border-blue-500 bg-transparent resize-none transition-all duration-200 text-white
[&:-webkit-autofill]:bg-transparent
[&:-webkit-autofill]:text-white
[&:-webkit-autofill]:[text-fill-color:white]
[&:-webkit-autofill]:[-webkit-text-fill-color:white]
[&:-webkit-autofill]:shadow-[0_0_0_1000px_rgba(0,0,0,0)_inset]
[&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s]`}
          whileFocus={{ scale: 1.01 }}
        />
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    </div>
  )
}

const ContactForm = ({ language }: any) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [textarea, setTextarea] = useState("")
  const [loading, setLoading] = useState("Submit")

  // Form validation states
  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [messageError, setMessageError] = useState("")
  const [formSuccess, setFormSuccess] = useState(false)

  React.useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    background-color: transparent !important;
    color: white !important;
  }
  input, textarea, select {
    color: white !important;
  }
`
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const validateEmail = (email: string): boolean => {
    if (emailRegex.test(email)) {
      setEmailError("")
      return true
    } else {
      setEmailError(language["email_error"] || "Please enter a valid email address")
      return false
    }
  }

  const validateForm = () => {
    let isValid = true

    if (!name.trim()) {
      setNameError(language["name_required"] || "Name is required")
      isValid = false
    } else {
      setNameError("")
    }

    if (!email.trim()) {
      setEmailError(language["email_required"] || "Email is required")
      isValid = false
    } else if (!validateEmail(email)) {
      isValid = false
    }

    if (!textarea.trim()) {
      setMessageError(language["message_required"] || "Message is required")
      isValid = false
    } else {
      setMessageError("")
    }

    return isValid
  }

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(language["loading"] || "Sending...")

    try {
      const response = await fetch(`https://formsubmit.co/ajax/bilalahmedfarooqi03@gmail.com`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          message: textarea,
          email,
        }),
      })

      const data = await response.json()
      setLoading(language["submitted_successfully"] || "Sent Successfully!")
      setFormSuccess(true)

      setTimeout(() => {
        setName("")
        setEmail("")
        setTextarea("")
        setLoading("Submit")
        setFormSuccess(false)
      }, 3000)
    } catch (error) {
      console.log(error)
      setLoading(language["error"] || "Error")
      setTimeout(() => {
        setLoading("Submit")
      }, 3000)
    }
  }

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div id="connect" className="z-[2] mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient mt-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          {language["get_in_touch"] || "Get In Touch"}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          {language["contact_subtitle"] || "Have a question or want to work together? Drop me a message!"}
        </p>
      </motion.div>

      <div className="w-[90%] md:w-[80%] mx-auto rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50">
        <div className="flex flex-col sm:flex-row">
          {/* Left section */}
          <motion.section
            className="flex flex-col items-center justify-center w-full sm:w-[40%] p-8 bg-gradient-to-br from-blue-600/20 to-teal-500/20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="w-24 h-24 mb-6 relative">
              <Image
                src="https://eiharold.com/wp-content/uploads/2022/02/icon-chat.png"
                alt="Contact icon"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-lg"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center">{language["lets_chat"] || "Let's Chat"}</h2>

            <p className="text-center text-gray-300 mb-6">
              {language["contact_description"] ||
                "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."}
            </p>

            <motion.a
              href="https://wa.link/zlze49"
              target="_blank"
              className="w-full max-w-[200px] flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-medium shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {language["discuss_on_whatsapp"] || "Chat on WhatsApp"}
            </motion.a>
          </motion.section>

          {/* Right section - Form */}
          <motion.section className="w-full sm:w-[60%] p-8" variants={formVariants} initial="hidden" animate="visible">
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6 text-center sm:text-left">
              {language["contact_form"] || "Send Me a Message"}
            </motion.h2>

            <form onSubmit={submitHandler}>
              <motion.div variants={itemVariants}>
                <FormInput
                  label={language["name_label"] || "Name"}
                  type="text"
                  value={name}
                  onChange={(e:any) => setName(e.target.value)}
                  placeholder={language["enter_name"] || "Enter your name"}
                  disabled={loading === language["loading"] || loading === language["submitted_successfully"]}
                  error={nameError}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormInput
                  label={language["email_label"] || "Email"}
                  type="email"
                  value={email}
                  onChange={(e:any) => setEmail(e.target.value)}
                  placeholder={language["enter_email"] || "Enter your email"}
                  disabled={loading === language["loading"] || loading === language["submitted_successfully"]}
                  error={emailError}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormTextarea
                  label={language["message_label"] || "Message"}
                  value={textarea}
                  onChange={(e:any) => setTextarea(e.target.value)}
                  placeholder={language["enter_message"] || "Enter your message"}
                  disabled={loading === language["loading"] || loading === language["submitted_successfully"]}
                  error={messageError}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mt-6">
                <motion.button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-lg font-medium shadow-lg transition-all duration-300 ${
                    formSuccess
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  }`}
                  disabled={loading === language["loading"] || loading === language["submitted_successfully"]}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading === language["loading"] ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {language["loading"] || "Sending..."}
                    </div>
                  ) : loading === language["submitted_successfully"] ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {language["submitted_successfully"] || "Sent Successfully!"}
                    </div>
                  ) : (
                    language["submit"] || "Send Message"
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

