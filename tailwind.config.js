/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        body: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: 'rgb(var(--primary-color) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-color) / <alpha-value>)',
        accent: 'rgb(var(--accent-color) / <alpha-value>)',
        light: 'rgb(var(--light-color) / <alpha-value>)',
        dark: 'rgb(var(--dark-color) / <alpha-value>)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            a: {
              color: 'rgb(var(--primary-color))',
              '&:hover': {
                color: 'rgb(var(--accent-color))',
              },
            },
            h1: {
              fontFamily: 'var(--font-montserrat)',
              fontWeight: '700',
            },
            h2: {
              fontFamily: 'var(--font-montserrat)',
              fontWeight: '700',
            },
            h3: {
              fontFamily: 'var(--font-montserrat)',
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
};