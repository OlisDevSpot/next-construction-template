import { useState, useEffect } from "react";

const useScrollNavigation = (startYPosition: number = 10) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Update state only if scroll position crosses the 10-pixel threshold
      if (
        (currentScroll > startYPosition && scrollPosition <= startYPosition) ||
        (currentScroll <= startYPosition && scrollPosition > startYPosition)
      ) {
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
