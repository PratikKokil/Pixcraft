import { useEffect, useState } from "react";

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    console.log("mounted");
    window.addEventListener("scroll", handleScroll);
    return () =>{ window.removeEventListener("scroll", handleScroll);
      console.log("cleanup");
    }
    }, []);
    return scrollY;
};
