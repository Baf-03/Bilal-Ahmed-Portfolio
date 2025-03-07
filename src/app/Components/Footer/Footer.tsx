import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ language }:any) {
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

                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="w-[100%] 3xl:text-[1.5rem] ">
                      <input
                        type="text"
                        name="name"
                        placeholder={language["enter_email"]}
                        className="block bg-transparent w-full px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-[#3b82f6] "
                      />
                    </div>
                    <button className="bg-[#1e5aed] text-white px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                      {language["subscribe_button"]}
                    </button>
                  </div>
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

        {/* Footer Bar */}
        <div className="bg-[#0a1a33] text-white mt-8 sm:mt-12 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-center sm:text-left">{language["footer_text"]}</p>
          <div className="flex gap-4">
            <Link href="#" className="text-white hover:text-gray-300">
              <Facebook size={18} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <Twitter size={18} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <Instagram size={18} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
