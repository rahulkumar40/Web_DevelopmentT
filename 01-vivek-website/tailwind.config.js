/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        facebook: '#3b5999',
        messenger: '#0084ff',
        twitter: '#55acee',
        linkedin: '#0077b5',
        youtube: '#cd201f',
        whatsapp: '#25d366',
        instagram: '#e4405f',
      },
    },
  },
  plugins: [],
};
