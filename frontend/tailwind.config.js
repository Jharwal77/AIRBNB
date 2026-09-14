/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#222222',
        body: '#3f3f3f',
        muted: '#717171',
        faint: '#929292',
        disabled: '#c1c1c1',
        line: '#ebebeb',
        edge: '#dddddd',
        surface: '#f7f7f7',
        rausch: '#ff385c',
        deep: '#e01e5a'
      },
      fontFamily: {
        cereal: ['airbnbCereal', 'Airbnb Cereal VF', 'Circular', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'Helvetica Neue', 'sans-serif']
      },
      boxShadow: {
        card: '0 6px 16px rgba(0, 0, 0, 0.12)',
        panel: '0 0 0 1px #dddddd, 0 6px 16px rgba(0, 0, 0, 0.12)',
        float: '0 2px 8px rgba(0, 0, 0, 0.18)'
      },
      maxWidth: {
        site: '1120px',
        tour: '976px'
      }
    }
  },
  plugins: []
};
