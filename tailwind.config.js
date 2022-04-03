let colors = require("tailwindcss/colors");

module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: colors.slate,
				brand: {
					1: "#0CE9DB",
					2: "#8001FF",
					3: "#FF6E4E",
					4: "#0F1729",
				},
			},
		},
	},
	plugins: [],
};
