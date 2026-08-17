/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#14162B',
          soft: '#1E2140',
        },
        paper: '#F7F8FB',
        surface: '#FFFFFF',
        line: '#E3E5EE',
        muted: '#5B5F73',
        brass: {
          DEFAULT: '#C98A2B',
          dark: '#A66F1E',
          light: '#FBF0DD',
        },
        indigo: {
          DEFAULT: '#4453C4',
          dark: '#333F9E',
          light: '#E9EAFB',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 22, 43, 0.06), 0 8px 24px rgba(20, 22, 43, 0.06)',
        panel: '0 20px 60px rgba(20, 22, 43, 0.25)',
      },
    },
  },
  plugins: [],
}
