let colors = require("tailwindcss/colors");

module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: colors.slate,
				brand: {
					1: "#CCFFE1",
					2: "#2AAD9D",
					3: "#1C6A72",
					4: "#138",
				},
			},
		},
	},
	plugins: [],
};
