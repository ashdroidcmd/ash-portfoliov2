import Footer from "../components/Footer"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
          AOS.init({
              duration: 1000, // animation duration
              once: true, // only animate once
          });
      }, []);
  return (
    <>
      <section id="contact-section" className="bg-black border-t border-blue-800 px-4 font-[Raleway] min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center py-10">
          <div data-aos="zoom-in" data-aos-once="true"  className="w-full max-w-7xl mx-auto text-white text-center">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-blue-600 mt-5 mb-8 font-semibold">
              Let&apos;s work together!
            </h1>

            <div className="custom-hover border border-blue-600 bg-slate-950 flex flex-col md:flex-row gap-6 md:gap-0 rounded-3xl py-8 px-6 md:py-10 md:px-10 justify-evenly items-center">

              {/* Contact Info */}
              <div className="text-start w-full md:w-1/2 text-base sm:text-lg md:text-xl">
                <p className="text-blue-600 text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8">
                  My Contact Information
                </p>
                <div className="space-y-3">
                  <div className="flex">
                    <p className="w-1/3 font-medium">Email:</p>
                    <p className="w-2/3 break-all">ashgesite25@gmail.com</p>
                  </div>
                  <div className="flex">
                    <p className="w-1/3 font-medium">LinkedIn:</p>
                    <p className="w-2/3">Ashlee Zoe C. Gesite</p>
                  </div>
                  <div className="flex">
                    <p className="w-1/3 font-medium">GitHub:</p>
                    <p className="w-2/3">ashdroidcmd</p>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="w-full md:w-1/2 flex justify-center">
                <button className="custom-hover btn py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-10 rounded-2xl text-2xl sm:text-3xl border border-blue-700 hover:bg-black transition duration-700 ease-in-out hover:scale-105">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  )
}

export default Contact