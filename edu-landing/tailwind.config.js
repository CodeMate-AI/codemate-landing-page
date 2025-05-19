/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './components/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/**/*.{js,ts,jsx,tsx,mdx}',
	  './styles/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
	  extend: {
		keyframes: {
		  'logo-cloud': {
			from: { transform: 'translateX(0)' },
			to: { transform: 'translateX(calc(-100% - 4rem))' },
		  },
		},
		animation: {
		  'logo-cloud': 'logo-cloud 30s linear infinite', // Adjust duration and timing as needed for your design.
		},
		colors: {
		  primary: "#00040f",
		  secondary: "#00f6ff",
		  dimWhite: "rgba(255, 255, 255, 0.7)",
		  dimBlue: "rgba(9, 151, 124, 0.1)",
		},
		fontFamily: {
		  poppins: ["Poppins", "sans-serif"],
		},
		screens: {
		  xs: "480px",
		  ss: "620px",
		  sm: "768px",
		  md: "1060px",
		  lg: "1200px",
		  xl: "1700px",
		},
	  },
	},
	plugins: [],
  };
  