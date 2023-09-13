import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function port() {
  gsap.registerPlugin(ScrollTrigger);
  const horSection = gsap.utils.toArray(".port__item"); //다중 선택을 사용한다.
  gsap.to(horSection, {
    xPercent: -120 * (horSection.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "#port",
      start: "top 100px",
      end: "+=3000",
      pin: true,
      scrub: 1,
      markers: false,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });
}
