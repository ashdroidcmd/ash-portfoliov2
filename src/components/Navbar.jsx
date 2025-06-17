import { Link } from "react-scroll";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="animate__animated animate__fadeInDown animate__slow fixed top-0 z-50 w-full border-b border-blue-800 bg-slate-950 shadow">
        <div className="flex h-26 items-center justify-between px-4 font-[Raleway]">
          {/* Logo */}
          <div className="w-47 flex-shrink-0">
            <Link to="home-section" smooth={true}>
              <img
                src="https://res.cloudinary.com/dmkri61cj/image/upload/w_80,f_auto,q_auto/v1749644913/logo_ujfwng.png"
                alt="Logo"
                className="w-20 p-2 transition-transform duration-500 ease-in-out hover:scale-125"
              />
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden space-x-6 lg:flex">
            <Link
              to="home-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-90}
              activeClass="active-link"
              className="custom-hover cursor-pointer rounded-3xl px-3 py-1 text-3xl text-white transition duration-100 ease-in-out hover:scale-105 hover:bg-blue-700"
            >
              Home
            </Link>

            <Link
              to="about-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-90}
              activeClass="active-link"
              className="custom-hover cursor-pointer rounded-3xl px-3 py-1 text-3xl text-white transition duration-100 ease-in-out hover:scale-105 hover:bg-blue-700"
            >
              About
            </Link>

            <Link
              to="project-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-90}
              activeClass="active-link"
              className="custom-hover cursor-pointer rounded-3xl px-3 py-1 text-3xl text-white transition duration-100 ease-in-out hover:scale-105 hover:bg-blue-700"
            >
              Projects
            </Link>

            <Link
              to="blog-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-90}
              activeClass="active-link"
              className="custom-hover cursor-pointer rounded-3xl px-3 py-1 text-3xl text-white transition duration-100 ease-in-out hover:scale-105 hover:bg-blue-700"
            >
              Blog
            </Link>

            <Link
              to="contact-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-90}
              activeClass="active-link"
              className="custom-hover cursor-pointer rounded-3xl px-3 py-1 text-3xl text-white transition duration-100 ease-in-out hover:scale-105 hover:bg-blue-700"
            >
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="hidden space-x-4 lg:flex">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ash-gesite-25a28334b/"
              target="_blank"
              className="rounded-full p-2 transition hover:scale-125"
            >
              <svg
                className="h-10 w-10 text-white hover:text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ashdroidcmd"
              target="_blank"
              className="rounded-full p-2 transition hover:scale-125"
            >
              <svg
                className="h-10 w-10 text-white hover:text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

            {/* Gmail */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ashgesite25@gmail.com&su=Hello%20Ash&body=I%20visited%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 transition hover:scale-125"
            >
              <svg
                className="h-10 w-10 text-white hover:text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </a>
          </div>

          {/* Hamburger Dropdown */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-52 space-y-2 bg-slate-950 p-4 text-2xl text-white shadow"
            >
              <li>
                <Link
                  to="home-section"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-90}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="about-section"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-90}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="project-section"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-90}
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="blog-section"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-90}
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="contact-section"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-90}
                >
                  Contact
                </Link>
              </li>

              <div className="divider divider-neutral my-1" />
              <div className="flex justify-center space-x-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ash-gesite-25a28334b/"
                  target="_blank"
                  className="rounded-full p-2 transition hover:scale-110 hover:bg-blue-800"
                >
                  <svg
                    className="h-8 w-8 text-white hover:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/ashdroidcmd"
                  target="_blank"
                  className="rounded-full p-2 transition hover:scale-110 hover:bg-blue-800"
                >
                  <svg
                    className="h-8 w-8 text-white hover:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>

                {/* Gmail */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashgesite25@gmail.com&su=Hello%20Ash&body=I%20visited%20your%20portfolio!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 transition hover:scale-110 hover:bg-blue-800"
                >
                  <svg
                    className="h-8 w-8 text-white hover:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
