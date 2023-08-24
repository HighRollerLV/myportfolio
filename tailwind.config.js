/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        '18': '4.5rem',
      },
      width: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
  },
}

