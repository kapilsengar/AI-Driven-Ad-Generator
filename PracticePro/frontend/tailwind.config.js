/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'word-spacing': '0.25em', // Add your desired word spacing value
      },
    },
  },
  plugins: [],
}