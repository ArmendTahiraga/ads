/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				primary: "#2e3630",
				secondary: "#00695F",
			},
			height: {
				"hero-section-md": "calc(100vh - 80px)",
				"hero-section": "calc(100vh - 60px)",
			},
			boxShadow: {
				"hero-image": "#00695Fa7 0px 0px 56px -10px",
				"about-home": "#64646f4f 0px 0px 24px 0px",
			},
		},
	},
	plugins: [],
};
