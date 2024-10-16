import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white text-lg font-semibold">About Me</h3>
          <p className="text-gray-400">
            I am a passionate developer with expertise in creating modern web applications using cutting-edge technologies. Lets connect and build something amazing together!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col space-y-4">
          {/*   <h3 className="text-white text-lg font-semibold">Quick Links</h3> */}
          {/* <ul className="space-y-2">
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition">
                Skills
              </a>
            </li>
            <li>
              <Link href="connect" className="hover:text-white transition">
                Lets Connect
              </Link>
            </li>
          </ul> */}
        </div>

        {/* Column 3: Contact */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white text-lg font-semibold">Contact</h3>
          <p>Email: <a href="mailto:bilalahmedfarooqi03@gmail.com" className="hover:text-white transition">bilalahmedfarooqi03@gmail.com</a></p>
          <p>Phone: <a href="tel:+92 318 8397656" className="hover:text-white transition">+92 318 8397656</a></p>
          {/* <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-github"></i>
            </a>
          </div> */}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Bilal Ahmed Baf-03. All rights reserved.
        </p>
        <p>Happy coding, and may your APIs always respond with 200 OK! 💻🔥🚀</p>
      </div>
    </footer>
  );
};

export default Footer;
