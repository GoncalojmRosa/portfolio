import { useEffect, useState } from "react";

export interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (
  delay: number = 0,
  currWidth: number,
  currHeight: number
): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: currWidth, // Initialize with 0 or some default value
    height: currHeight, // Initialize with 0 or some default value
  });

  useEffect(() => {
    // Debounce function to delay updating the window size
    const debounce = (callback: () => void, delay: number) => {
      let timer: ReturnType<typeof setTimeout>;

      return function debouncedFunc() {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
      };
    };

    // Update window size
    const handleResize = debounce(() => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      setWindowSize({
        width: newWidth,
        height: newHeight,
      });
    }, delay);

    // Event listener for window resize
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize(); // Initialize with the current window size
    }

    // Cleanup
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [delay]);

  return windowSize;
};

export default useWindowSize;
