
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        maguito: {
          orange: 'var(--maguito-primary, #F18652)',
          blue: 'var(--maguito-secondary, #79BCE8)',
          yellow: 'var(--maguito-accent, #FDCB63)',
          red: 'var(--maguito-danger, #E95B6F)',
          black: 'var(--maguito-text, #2C2C2C)',
          white: 'var(--maguito-bg, #FEFEFC)',
          green: 'var(--maguito-success, #A2D149)',
          cyan: 'var(--maguito-info, #67E8F9)',
          amber: 'var(--maguito-warning, #FBBF24)'
        }
      },
      borderRadius: {
        'maguito-lg': 'var(--maguito-radius-lg, 40px)',
        'maguito-md': 'var(--maguito-radius-md, 16px)',
        'maguito-sm': 'var(--maguito-radius-sm, 8px)',
      },
      fontFamily: {
        sans: ['var(--maguito-font-body)', 'sans-serif'],
        display: ['var(--maguito-font-display)', 'sans-serif'],
      }
    }
  },
  plugins: [],
};
