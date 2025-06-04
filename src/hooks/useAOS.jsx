import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // don't forget the CSS!

export function useAOS(options = { duration: 1000, once: true }) {
  useEffect(() => {
    AOS.init(options);
  }, [options]);
}
