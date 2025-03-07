"use client"

import { useEffect, useRef } from "react"

const ZapierChatbot = () => {
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (!scriptLoaded.current) {
      const script = document.createElement("script")
      script.src = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
      script.async = true
      script.type = "module"
      document.body.appendChild(script)

      script.onload = () => {
        const chatbotElement = document.createElement("zapier-interfaces-chatbot-embed")
        chatbotElement.setAttribute("is-popup", "true")
        chatbotElement.setAttribute("chatbot-id", "cm7y6akoc00123zmo5n2x95m9")

        // Apply custom styles
        chatbotElement.style.cssText = `
          position: fixed;
          bottom: 20px;
          left: 0px;
          z-index: 1000;
          --zi-chat-button-color: #3b82f6;
          --zi-chat-button-color-hover: #2563eb;
          --zi-chat-button-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --zi-chat-button-shadow-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --zi-chat-button-text-color: white;
          --zi-chat-header-bg-color: #3b82f6;
          --zi-chat-header-text-color: white;
          --zi-chat-bubble-bot-bg-color: #f3f4f6;
          --zi-chat-bubble-user-bg-color: #dbeafe;
          --zi-chat-bubble-bot-text-color: #1f2937;
          --zi-chat-bubble-user-text-color: #1f2937;
        `

        // Add custom CSS to prevent blue selection
        const style = document.createElement("style")
        style.textContent = `
          zapier-interfaces-chatbot-embed::part(chat-button),
          zapier-interfaces-chatbot-embed::part(chat-window) {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
          }
        `
        document.head.appendChild(style)

        document.body.appendChild(chatbotElement)
      }

      scriptLoaded.current = true
    }
  }, [])

  return null
}

export default ZapierChatbot

