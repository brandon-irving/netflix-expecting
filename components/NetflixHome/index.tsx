"use client";
import { fatherRowData } from "@/data/father";
import { featuredData } from "@/data/featured";
import { ourFamilyRowData } from "@/data/ourFamily";
import { AnimatePresence } from "framer-motion";
import { Bell, ChevronDown, Info, Play, Search } from "lucide-react";
import NetflixHero from "../NetflixHero";
import NetflixLogo from "../NetflixLogo";
import NetflixRow from "./NetflixRow";
import NetflixTop10 from "./NetflixTopTen";

export default function NetflixHome() {
  return (
    <AnimatePresence>
      <div className="bg-#141414 text-white min-h-screen">
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
      </div>
    </AnimatePresence>
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
          <img src="/images/user.png" alt="User" className="w-8 h-8 rounded" />
          <ChevronDown className="text-white w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <div className="relative h-[56.25vw] max-h-[80vh]">
    <img
      src={featuredData.src}
      alt="Featured Content"
      //   className="w-full h-full object-cover"
      className="w-full h-full object-fill"
    />
    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        {featuredData.title}
      </h1>
      <p className="text-lg md:text-xl mb-4 max-w-2xl">
        {featuredData.description}
      </p>
      <div className="flex space-x-4">
        <button className="bg-white text-black px-6 py-2 rounded flex items-center hover:bg-opacity-80">
          <Play className="w-6 h-6 mr-2" /> Play
        </button>
        <button className="bg-gray-500 bg-opacity-50 text-white px-6 py-2 rounded flex items-center hover:bg-opacity-40">
          <Info className="w-6 h-6 mr-2" /> More Info
        </button>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="py-8 px-4 text-gray-400">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
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
        </div>
      </div>
      <p className="mt-8 text-center">
        © 2023 Netflix Clone. All rights reserved.
      </p>
    </div>
  </footer>
);
