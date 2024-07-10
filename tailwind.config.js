module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // enables dark mode
    theme: {
      extend: {
        colors: {
          primary: '#8A2BE2',
          secondary: '#FF1493',
          accent: '#00FFFF',
          background: '#1A1A2E',
        },
        backgroundColor: {
          'card-bg': 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }