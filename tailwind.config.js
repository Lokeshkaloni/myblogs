/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "head-01": ["50px", "68px"],
        "head-02": ["24px", "33px"],
        "head-03": ["18px", "24px"],
        "head-04": ["30px", "41px"],
        "head-05": ["12px", "15px"],
        "head-06": ["18px", "22px"],
        "head-07": ["16px", "22px"],
      },
      colors: {
        primary: "#4F46E5",
        secondary: "#F9FAFB",
        secondaryDark: "#F3FFFF",
        gray: {
          "01": "#343434",
          "02": "#707070",
          "03": "#818181",
          "04": "#000000",
          "05": "#E5E7EB",
          "06": "#A9A9A9",
        },
      },
    },
  },
  plugins: [],
};
