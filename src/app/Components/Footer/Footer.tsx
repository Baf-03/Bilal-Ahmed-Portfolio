"use client"

import Link from "next/link"
import type React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
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
    },
  }

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Column 1: About */}
        <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
          <h3 className="text-white text-xl font-bold">About Me</h3>
          <p className="text-gray-400 leading-relaxed">
            I am a passionate developer with expertise in creating modern web applications using cutting-edge
            technologies. Let's connect and build something amazing together!
          </p>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
          <h3 className="text-white text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#projects"
                className="hover:text-white transition-colors duration-300 flex items-center space-x-2"
              >
                <span className="bg-blue-500 h-1 w-4 inline-block"></span>
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="hover:text-white transition-colors duration-300 flex items-center space-x-2"
              >
                <span className="bg-green-500 h-1 w-4 inline-block"></span>
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link
                href="/connect"
                className="hover:text-white transition-colors duration-300 flex items-center space-x-2"
              >
                <span className="bg-purple-500 h-1 w-4 inline-block"></span>
                <span>Let's Connect</span>
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Column 3: Contact */}
        <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
          <h3 className="text-white text-xl font-bold">Contact</h3>
          <a
            href="mailto:bilalahmedfarooqi03@gmail.com"
            className="hover:text-white transition-colors duration-300 flex items-center space-x-2"
          >
            <Mail size={18} />
            <span>bilalahmedfarooqi03@gmail.com</span>
          </a>
          <a
            href="tel:+92 318 8397656"
            className="hover:text-white transition-colors duration-300 flex items-center space-x-2"
          >
            <Phone size={18} />
            <span>+92 318 8397656</span>
          </a>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/Baf-03"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bilal-ahmed-a94229241/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="border-t border-gray-700 mt-12 pt-8 text-center"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-gray-500">&copy; {currentYear} Bilal Ahmed Baf-03. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-400">Happy coding, and may your APIs always respond with 200 OK! 💻🔥🚀</p>
      </motion.div>
    </footer>
  )
}

export default Footer

