
/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//         "panner": "url('/panner.jpg')" , 
//         "image1": "url('/image1.jfif')" , 
//         "image2": "url('/image2.jfif')" , 
//       },
//     },
//   },
//   plugins: [Myclass],
// };
// export default config;
module.exports = {
  content: ['./index.html','./components/**/*.{js,ts,jsx,tsx,mdx}','./pages/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "panner": "url('/panner.jpg')" , 
        "image1": "url('/image1.jfif')" , 
        "image2": "url('/image2.jfif')" , 
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".my-rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".perspective": {
          perspective: "1000px",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
      });
    })
  ],
}