let colors = require("tailwindcss/colors");

module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: colors.slate,
				brand: {
					1: "#8001FF",
					2: "#4409A2",
					3: "#ff6e4e",
					4: "#0ce9da",
				},
			},
		},
	},
	plugins: [],
};
