"use client";
import { fatherRowData } from "@/data/father";
import { ourFamilyRowData } from "@/data/ourFamily";
import { motion } from "framer-motion";
import { Bell, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import NetflixLogo from "../NetflixLogo";
import NetflixHero from "./NetflixHero";
import NetflixRow from "./NetflixRow";
import NetflixTop10 from "./NetflixTopTen";

export default function NetflixHome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-#141414 text-white min-h-screen"
    >
      <Header />
      <main>
        <NetflixHero />
        <div className="px-4 md:px-8 pt-16 relative z-10">
          <div className="mb-10">
            <NetflixRow
              title={fatherRowData.rowTitle}
              data={fatherRowData.rowPosters}
            />
          </div>
          <div className="mb-10">
            <NetflixTop10 top10={fatherRowData.top10} />
          </div>
          <div className="mb-10">
            <NetflixRow
              title={ourFamilyRowData.rowTitle}
              data={ourFamilyRowData.rowPosters}
            />
          </div>
          <div className="mb-10">
            <NetflixTop10 top10={ourFamilyRowData.top10} />
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}

const Header = () => (
  <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-black to-transparent">
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <NetflixLogo />
        <nav className="hidden md:flex ml-8 space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            TV Shows
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Movies
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            New & Popular
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            My List
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="text-white w-6 h-6" />
        <Bell className="text-white w-6 h-6" />
        <div className="flex items-center">
          <Image
            height={32}
            width={32}
            src="/images/user.png"
            alt="User"
            className="w-8 h-8 rounded"
          />
          <ChevronDown className="text-white w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="py-8 px-4 text-gray-400">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* <div>
          <h3 className="font-semibold mb-2">Useful links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Gender reveal (coming soon)
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Baby Registry (coming soon)
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Help Center</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Media Center
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <p className="mt-8 text-center">
        Made with <span className="text-red-600">❤️</span> by the father Brandon
        Irving
      </p>
      {/* <p className="mt-5 text-center">
        <a
          target="_blank"
          className="px-6 py-3 bg-gradient-to-r from-pink-300 to-blue-300 text-black font-bold rounded-full shadow-lg transition transform hover:scale-105 hover:bg-gradient-to-l"
          href="https://irving-gender-reveal.vercel.app/"
        >
          Checkout the gender reveal!
        </a>
      </p> */}
    </div>
  </footer>
);
