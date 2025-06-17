import Footer from "../components/Footer";
import { useAOS } from "../hooks/useAOS";

const Contact = () => {
  // Hook
  useAOS();

  return (
    <>
      <section
        id="contact-section"
        className="flex min-h-screen flex-col border-t border-blue-800 bg-black px-4 font-[Raleway]"
      >
        <div className="flex flex-grow items-center justify-center py-10">
          <div
            data-aos="zoom-in"
            data-aos-once="true"
            className="mx-auto w-full max-w-7xl text-center text-white"
          >
            <h1 className="mt-5 mb-8 text-4xl font-semibold text-blue-600 sm:text-5xl md:text-6xl">
              Let&apos;s work together!
            </h1>

            <div className="custom-hover flex flex-col items-center justify-evenly gap-6 rounded-3xl border border-blue-600 bg-slate-950 px-6 py-8 md:flex-row md:gap-0 md:px-10 md:py-10">
              {/* Contact Info */}
              <div className="w-full text-start text-base sm:text-lg md:w-1/2 md:text-xl">
                <p className="mb-6 text-2xl font-semibold text-blue-600 sm:text-3xl md:mb-8 md:text-4xl">
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
              <div className="flex w-full justify-center md:w-1/2">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashgesite25@gmail.com&su=Hello%20Ash&body=I%20visited%20your%20portfolio!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="custom-hover btn rounded-2xl border border-blue-700 px-6 py-4 text-2xl transition duration-700 ease-in-out hover:scale-105 hover:bg-black sm:px-8 sm:py-6 sm:text-3xl md:px-10 md:py-8">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Contact;
