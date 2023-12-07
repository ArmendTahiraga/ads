/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				primary: "#49544C",
				secondary: "#22c55e",
				tertiary: "#00695F",
			},
			height: {
				"hero-section-md": "calc(100vh - 80px)",
				"hero-section": "calc(100vh - 60px)",
			},
			boxShadow: {
				"hero-image": "#61B278a7 0px 0px 46px 0px",
				"about-home": "#64646f4f 0px 7px 29px 0px;",
			},
		},
	},
	plugins: [],
};
