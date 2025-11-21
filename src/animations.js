// // src/animations.js
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export function pageEnter(element) {
//   return gsap.fromTo(
//     element,
//     { autoAlpha: 0, y: 20 },
//     { autoAlpha: 1, y: 0, duration: 0.75, ease: "power2.out" }
//   );
// }

// export function revealOnScroll(selector) {
//   gsap.utils.toArray(selector).forEach((el) => {
//     gsap.fromTo(
//       el,
//       { autoAlpha: 0, y: 25 },
//       {
//         autoAlpha: 1,
//         y: 0,
//         duration: 0.6,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: el,
//           start: "top 85%",
//         },
//       }
//     );
//   });
// }
