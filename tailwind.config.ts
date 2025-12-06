import { frostedThemePlugin } from "@whop/react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backdropBlur: {
				xs: "2px",
				"3xl": "64px",
				"4xl": "128px",
			},
			boxShadow: {
				"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
				glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
				"glass-lg": "0 12px 48px 0 rgba(0, 0, 0, 0.5)",
				"glass-xl": "0 20px 60px 0 rgba(0, 0, 0, 0.6)",
				glow: "0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)",
				"glow-lg": "0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)",
				"glow-xl": "0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3), 0 0 90px rgba(139, 92, 246, 0.1)",
			},
			animation: {
				shimmer: "shimmer 2s linear infinite",
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
				float: "float 3s ease-in-out infinite",
				"gradient-shift": "gradient-shift 3s ease infinite",
			},
			keyframes: {
				shimmer: {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" },
				},
				"pulse-glow": {
					"0%, 100%": {
						boxShadow: "0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)",
					},
					"50%": {
						boxShadow: "0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)",
					},
				},
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"gradient-shift": {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
			},
		},
	},
	plugins: [frostedThemePlugin()],
};

export default config;
