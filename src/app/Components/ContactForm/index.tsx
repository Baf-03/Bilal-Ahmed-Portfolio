"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* ───────────────────────── helpers ───────────────────────── */
const baseInput =
  `block bg-transparent w-full px-4 py-3 rounded-md border
   focus:outline-none focus:border-blue-500 transition-all duration-200 text-inherit
   [&:-webkit-autofill]:bg-transparent
   [&:-webkit-autofill]:[color:inherit]
   [&:-webkit-autofill]:shadow-[0_0_0_1000px_rgba(0,0,0,0)_inset]
   [&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s]`

/* ───────────────────────── generic field components ───────────────────────── */
const FormInput = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  disabled,
  error,
  required = false,
}: any) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-sm font-medium mb-1">
          {label}
          {required && <span className="text-red-500">*</span>}
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
          className={`${baseInput} ${
            error ? "border-red-500" : isFocused ? "border-blue-500" : "border-gray-600"
          }`}
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

const FormTextarea = ({
  label,
  value,
  onChange,
  placeholder,
  disabled,
  error,
  required = false,
}: any) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-sm font-medium mb-1">
          {label}
          {required && <span className="text-red-500">*</span>}
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
          className={`${baseInput} h-32 resize-none ${
            error ? "border-red-500" : isFocused ? "border-blue-500" : "border-gray-600"
          }`}
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

/* ───────────────────────── main component ───────────────────────── */
const ContactForm = ({ language }: any) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [textarea, setTextarea] = useState("")
  const [loading, setLoading] = useState("Submit")

  // validation
  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [messageError, setMessageError] = useState("")
  const [formSuccess, setFormSuccess] = useState(false)

  /* fix -webkit-autofill color: make it inherit, not white */
  useEffect(()=>{
    const style = document.createElement("style")
    style.innerHTML = `
      input:-webkit-autofill,
      textarea:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px transparent inset;
        background-color: transparent !important;
        color: inherit !important;
      }
      input, textarea, select { color: inherit !important; }
    `
    document.head.appendChild(style)
  })
  useEffect(()=>{
    
  }, [])

  /* helpers */
  const validateEmail = (email: string) =>
    emailRegex.test(email)
      ? (setEmailError(""), true)
      : (setEmailError(language["email_error"] || "Please enter a valid email address"), false)

  const validateForm = () => {
    let ok = true
    if (!name.trim()) (setNameError(language["name_required"] || "Name is required"), (ok = false))
    else setNameError("")

    if (!email.trim()) (setEmailError(language["email_required"] || "Email is required"), (ok = false))
    else if (!validateEmail(email)) ok = false

    if (!textarea.trim()) (setMessageError(language["message_required"] || "Message is required"), (ok = false))
    else setMessageError("")

    return ok
  }

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(language["loading"] || "Sending...")
    try {
      await fetch(`https://formsubmit.co/ajax/bilalahmedfarooqi03@gmail.com`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, message: textarea, email }),
      })

      setLoading(language["submitted_successfully"] || "Sent Successfully!")
      setFormSuccess(true)
      setTimeout(() => {
        setName("")
        setEmail("")
        setTextarea("")
        setLoading("Submit")
        setFormSuccess(false)
      }, 3000)
    } catch {
      setLoading(language["error"] || "Error")
      setTimeout(() => setLoading("Submit"), 3000)
    }
  }

  /* framer-motion variants */
  const formVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  }

  /* ───────────────────────── UI ───────────────────────── */
  return (
    <div id="connect" className="z-[2] mb-10">
      {/* …header hero … */}
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

      {/* …two-column panel … */}
      <div className="w-[90%] md:w-[80%] mx-auto rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          {/* left promo section */}
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
            <p className="text-center mb-6">
              {language["contact_description"] ||
                "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."}
            </p>

            <motion.a
              href="https://wa.link/zlze49"
              target="_blank"
              rel="noreferrer"
              className="w-full max-w-[200px] flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-medium shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* whatsapp icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {language["discuss_on_whatsapp"] || "Chat on WhatsApp"}
            </motion.a>
          </motion.section>

          {/* right form section */}
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
                  onChange={(e: any) => setName(e.target.value)}
                  placeholder={language["enter_name"] || "Enter your name"}
                  disabled={loading !== "Submit"}
                  error={nameError}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormInput
                  label={language["email_label"] || "Email"}
                  type="email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  placeholder={language["enter_email"] || "Enter your email"}
                  disabled={loading !== "Submit"}
                  error={emailError}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormTextarea
                  label={language["message_label"] || "Message"}
                  value={textarea}
                  onChange={(e: any) => setTextarea(e.target.value)}
                  placeholder={language["enter_message"] || "Enter your message"}
                  disabled={loading !== "Submit"}
                  error={messageError}
                  required
                />
              </motion.div>

              {/* submit button */}
              <motion.div variants={itemVariants} className="mt-6">
                <motion.button
                  type="submit"
                  disabled={loading !== "Submit"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-medium shadow-lg transition-all duration-300 ${
                    formSuccess
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  }`}
                >
                  {loading}
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
