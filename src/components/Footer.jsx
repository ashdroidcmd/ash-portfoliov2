import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true, // only animate once
        });
    }, []);

    return (
        <>
            <footer data-aos="fade-up" data-aos-once="true" className="footer-center flex flex-col justify-between items-center text-lg p-4 pb-10">
                
                {/* Social Media Icons */}
                <ul className="flex flex-row">

                    {/* Linkedin */}
                    <li className="mx-4"><a href="" className="mx-3 rounded-3xl" title="Linkedin">
                        <svg className="text-white w-8 h-8 duration-500 ease-in-out transition hover:scale-150" 
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /> <rect x="2" y="9" width="4" height="12" /> <circle cx="4" cy="4" r="2" /></svg>
                    </a></li>

                    {/* Github */}
                    <li className="mx-4"><a href="" className="mx-3 rounded-3xl" title="Github">
                        <svg className="text-white w-8 h-8 duration-500 ease-in-out transition hover:scale-150"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                    </a></li>

                    {/* Gmail */}
                    <li className="mx-4"><a href="" className="mx-3 rounded-3xl" title="Gmail">
                        <svg className="text-white w-8 h-8 duration-500 ease-in-out transition hover:scale-150"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                    </a></li>

                </ul>

                <aside>
                    <p>Copyright © {new Date().getFullYear()} - Ashlee Zoe Gesite, All Rights Reserved</p>
                </aside>
            </footer>
        </>
    )
}

export default Footer