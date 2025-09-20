import { useEffect } from "react";

function useAnimateSVG() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const svg = entry.target;
            const duration = svg.dataset.duration ? parseInt(svg.dataset.duration) : 2000;
            const stagger = svg.dataset.stagger ? parseInt(svg.dataset.stagger) : 300;

            const paths = svg.querySelectorAll("path");
            paths.forEach((path, i) => {
              if (typeof path.getTotalLength !== "function") return;

              const length = path.getTotalLength();
              path.style.strokeDasharray = length;
              path.style.strokeDashoffset = length;

              path.getBoundingClientRect();

              requestAnimationFrame(() => {
                path.style.transition = `stroke-dashoffset ${duration}ms ease ${i * stagger}ms`;
                path.style.strokeDashoffset = "0";
              });
            });

            observer.unobserve(svg);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all SVG elements with class 'animate-svg'
    const svgs = document.querySelectorAll(".animate-svg");
    svgs.forEach((svg) => observer.observe(svg));

    return () => observer.disconnect();
  }, []);
}

export default useAnimateSVG;
