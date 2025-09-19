import { useEffect } from "react";

function useAnimateSVG() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const svg = entry.target;
            const duration = svg.dataset.duration || 2000;
            const stagger = svg.dataset.stagger || 300;

            const paths = svg.querySelectorAll("path");
            paths.forEach((p, i) => {
              const length = p.getTotalLength();
              p.style.strokeDasharray = length;
              p.style.strokeDashoffset = length;

              p.getBoundingClientRect();

              p.style.transition = `stroke-dashoffset ${duration}ms ease ${i * stagger}ms`;
              p.style.strokeDashoffset = "0";
            });

            observer.unobserve(svg);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".animate-svg").forEach((svg) => {
      observer.observe(svg);
    });

    return () => observer.disconnect();
  }, []);
}

export default useAnimateSVG;