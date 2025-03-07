"use client"

import { BotIcon } from "lucide-react"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { FaWhatsapp, FaComments } from "react-icons/fa"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "zapier-interfaces-chatbot-embed": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

const FloatingButtons: React.FC = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const chatbotRef = useRef<HTMLElement | null>(null)

  // Load Zapier script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
    script.async = true
    script.type = "module"
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // Toggle chatbot visibility and trigger its internal button
  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev)
    if (!isChatbotOpen && chatbotRef.current) {
      const chatButton = chatbotRef.current.shadowRoot?.querySelector("button")
      if (chatButton) {
        chatButton.click()
      }
    }
  }

  // Open WhatsApp link
  const whatsAppHandler = () => {
    window.open("https://wa.link/zlze49", "_blank")
  }

  return (
    <>
      {/* Container for buttons */}
      <div className="fixed right-5 bottom-5 flex flex-row items-center gap-4 z-[1000]">
        {/* Chatbot Button */}
        
        {/* WhatsApp Button */}
        <div
          onClick={whatsAppHandler}
          className="whatsapp-button bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
        >
          <FaWhatsapp size={24} />
        </div>
         
        <button
          onClick={toggleChatbot}
          className="bg-blue-500 flex-col hover:bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out"
          aria-label="Open chatbot"
        >
          <BotIcon size={24} />
        </button>
      </div>

      {/* Zapier Chatbot Embed */}
      <zapier-interfaces-chatbot-embed
        ref={chatbotRef}
        is-popup="true"
        chatbot-id="cm7y6akoc00123zmo5n2x95m9"
        style={{
          position: "fixed",
          bottom: "80px", // Closer to buttons, above them
          right: "20px",
          zIndex: 1001,
          "--zi-chat-button-color": "#3b82f6",
          "--zi-chat-button-color-hover": "#2563eb",
          "--zi-chat-button-shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          "--zi-chat-button-shadow-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          "--zi-chat-button-text-color": "white",
          "--zi-chat-header-bg-color": "#3b82f6",
          "--zi-chat-header-text-color": "white",
          "--zi-chat-bubble-bot-bg-color": "#f3f4f6",
          "--zi-chat-bubble-user-bg-color": "#dbeafe",
          "--zi-chat-bubble-bot-text-color": "#1f2937",
          "--zi-chat-bubble-user-text-color": "#1f2937",
          display: isChatbotOpen ? "block" : "none",
        } as React.CSSProperties}
      />
    </>
  )
}

export default FloatingButtons