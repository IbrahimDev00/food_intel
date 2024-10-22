import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1F2937", // Custom dark background
        foreground: "#F3F4F6", // Custom light text color
        primary: "#32CD32", // Custom green for buttons
      },
      fontSize: {
        'input-text': '1.125rem', // Font size for input fields
        'label-text': '1rem', // Font size for labels
        'button-text': '1.125rem', // Font size for buttons
      },
      padding: {
        'form-padding': '1rem', // Padding for form elements
        'input-padding': '0.75rem', // Padding for input fields
        'button-padding': '0.875rem 2rem', // Padding for buttons
      },
      spacing: {
        'form-gap': '1.25rem', // Gap between form elements
      },
      borderRadius: {
        'input-radius': '0.375rem', // Rounded corners for input fields
        'button-radius': '0.5rem', // Rounded corners for buttons
      },
      boxShadow: {
        'input-shadow': '0 1px 3px rgba(0, 0, 0, 0.2)', // Input field shadow
        'button-shadow': '0 2px 4px rgba(0, 0, 0, 0.3)', // Button shadow
      },
    },
  },
  plugins: [],
};

export default config;
