import { useEffect, useState } from "react";

export function useTailwindBreakpoints() {
  const [breakpoints, setBreakpoints] = useState({
    sm: false, // <640px
    md: false, // 640px–1023px
    lg: false, // 1024px–1279px
    xl: false, // >=1280px
    xxl: false, // >=1440px
  });

  useEffect(() => {
    const mediaQueries = {
      sm: window.matchMedia("(max-width: 639px)"),
      md: window.matchMedia("(min-width: 640px) and (max-width: 1023px)"),
      lg: window.matchMedia("(min-width: 1024px) and (max-width: 1279px)"),
      xl: window.matchMedia("(min-width: 1280px)"),
      xxl: window.matchMedia("(min-width: 1440px)"),
    };

    const updateBreakpoints = () => {
      setBreakpoints({
        sm: mediaQueries.sm.matches,
        md: mediaQueries.md.matches,
        lg: mediaQueries.lg.matches,
        xl: mediaQueries.xl.matches,
        xxl: mediaQueries.xxl.matches,
      });
    };

    Object.values(mediaQueries).forEach((mq) =>
      mq.addEventListener("change", updateBreakpoints)
    );
    updateBreakpoints();

    return () =>
      Object.values(mediaQueries).forEach((mq) =>
        mq.removeEventListener("change", updateBreakpoints)
      );
  }, []);

  return breakpoints;
}
