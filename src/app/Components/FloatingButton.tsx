"use client"

import { BotIcon } from "lucide-react"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import Script from "next/script"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "zapier-interfaces-chatbot-embed": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

const FloatingButtons: React.FC = () => {
  /* UI state */
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [ready, setReady] = useState(false)          // <—  true only when element is defined

  /* ref to the web-component element */
  const chatbotRef = useRef<HTMLElement | null>(null)

  /* ───────────────────────────── load Zapier script once ───────────────────────────── */
  useEffect(() => {
    // Already defined? then we're ready immediately
    if (window.customElements.get("zapier-interfaces-chatbot-embed")) {
      setReady(true)
      return
    }

    /* wait until the element class is registered */
    customElements
      .whenDefined("zapier-interfaces-chatbot-embed")
      .then(() => setReady(true))
  }, [])

  /* ───────────────────────────── open the popup once ready ──────────────────────────── */
  useEffect(() => {
    if (!isChatbotOpen || !ready || !chatbotRef.current) return

    // give the inner DOM a tick to render
    const id = setTimeout(() => {
      const chatButton =
        chatbotRef.current!.shadowRoot?.querySelector("button")
      chatButton?.click()
    }, 100) // increased timeout

    return () => clearTimeout(id)
  }, [isChatbotOpen, ready])

  /* handlers */
  const toggleChatbot = () => setIsChatbotOpen((prev) => !prev)
  const openWhatsapp = () => window.open("https://wa.link/zlze49", "_blank")

  /* ───────────────────────────────── UI ───────────────────────────────── */
  return (
    <>
      <Script
        src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
        strategy="afterInteractive"
        type="module"
        onLoad={() => setReady(true)}
      />

      {/* floating action buttons */}
      <div className="fixed right-5 bottom-5 flex flex-row items-center gap-4 z-[1000]">
        {/* WhatsApp */}
        <button
          onClick={openWhatsapp}
          aria-label="WhatsApp"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out"
        >
          <FaWhatsapp size={24} />
        </button>

        {/* Bot (disabled until ready) */}
        <button
          onClick={toggleChatbot}
          aria-label="Chatbot"
          disabled={!ready}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out
                      ${ready ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-400 cursor-not-allowed text-gray-200"}`}
        >
          <BotIcon size={24} />
        </button>
      </div>

      {/* Zapier web component */}
      <zapier-interfaces-chatbot-embed
        is-popup="true"
        show-button="false"
        is-open={isChatbotOpen ? "true" : "false"}
        chatbot-id="cmm8bwo71005zx6p3ixem8unf"
        style={
          {
            "--zi-chat-button-color": "#3b82f6",
            "--zi-chat-button-color-hover": "#2563eb",
            "--zi-chat-button-shadow":
              "0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)",
            "--zi-chat-button-shadow-hover":
              "0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)",
            "--zi-chat-button-text-color": "white",
            "--zi-chat-header-bg-color": "#3b82f6",
            "--zi-chat-header-text-color": "white",
            "--zi-chat-bubble-bot-bg-color": "#f3f4f6",
            "--zi-chat-bubble-user-bg-color": "#dbeafe",
            "--zi-chat-bubble-bot-text-color": "#1f2937",
            "--zi-chat-bubble-user-text-color": "#1f2937",
          } as React.CSSProperties
        }
      />
    </>
  )
}

export default FloatingButtons
