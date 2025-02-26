import { useState, useEffect } from "react";

const useScrollNavigation = (startYPosition: number = 10) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollOut =
        currentScroll > startYPosition && scrollPosition <= startYPosition;
      const scrollIn =
        currentScroll <= startYPosition && scrollPosition > startYPosition;

      // Update state only if scroll position crosses the 10-pixel threshold
      if (scrollOut || scrollIn) {
        setScrollPosition(currentScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition, startYPosition]);

  console.log(scrollPosition);

  return scrollPosition;
};

export default useScrollNavigation;
