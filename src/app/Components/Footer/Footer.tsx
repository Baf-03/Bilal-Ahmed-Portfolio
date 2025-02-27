import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="w-full mb-8">
      <div className="w-full  rounded-3xl overflow-hidden !shadow-2xl border-y-2 border-blue-800">
        <div className="p-6 sm:p-8 md:p-12 pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Logo and Subscribe Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col gap-6">
                {/* <div className="flex items-center">
                  <Image src="/favicon.ico" alt="baf-logo" width={50} height={20} className="h-auto" />
                </div> */}

                <div className="mt-2 sm:mt-4">
                  <h3 className="text-xl font-semibold mb-2">Subscribe For Insights</h3>
                  <p className="text-sm mb-4">Get The Latest Dev Insights & AI Updates!</p>

                  <div className="flex flex-col sm:flex-row gap-2">
                  <div className="w-[100%] 3xl:text-[1.5rem] ">
            <input
              type="text"
              name="name"
              placeholder="Enter Email"
              // disabled={
              //   loading === "Loading" ||
              // }
              className="block bg-transparent w-full px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-[#3b82f6] "
            />
          </div>
                    <button className="bg-[#1e5aed] text-white px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div className="sm:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Dev Ideas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    AI blogs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Successful Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="sm:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="" className="text-gray-600 hover:text-gray-900 text-sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Terms Of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Privacy Policy
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="bg-[#0a1a33] text-white mt-8 sm:mt-12 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-center sm:text-left">Designed By baf-03 - All Rights Reserved</p>
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
  )
}

