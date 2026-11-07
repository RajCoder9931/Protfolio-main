/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F7F5F0',
        ink: {
          DEFAULT: '#1A1A18',
          soft: '#44423D',
          muted: '#6E6A61'
        },
        accent: {
          DEFAULT: '#14532D',
          dark: '#0C3B20',
          soft: '#E3EDE5'
        },
        line: '#E5E0D5'
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        site: '72rem'
      },
      boxShadow: {
        card: '0 1px 2px rgba(26,26,24,0.05), 0 8px 24px -12px rgba(26,26,24,0.12)',
        pop: '0 12px 40px -12px rgba(26,26,24,0.25)'
      }
    }
  },
  plugins: []
};
