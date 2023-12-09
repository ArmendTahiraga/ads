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
				footer: "#ffffff2f",
			},
			height: {
				"hero-section-md": "calc(100vh - 80px)",
				"hero-section": "calc(100vh - 60px)",
			},
			boxShadow: {
				"hero-image": "#00695Fa7 0px 0px 56px -10px",
				"about-home": "#64646f4f 0px 0px 24px 0px",
				footer: "0 4px 30px #0000002f",
			},
			borderColor: {
				footer: "#ffffff4f",
			},

			/* From https://css.glass */
			// background: rgba(255, 255, 255, 0.2);
			// border-radius: 16px;
			// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			// backdrop-filter: blur(5px);
			// -webkit-backdrop-filter: blur(5px);
			// border: 1px solid rgba(255, 255, 255, 0.3);
		},
	},
	plugins: [],
};
