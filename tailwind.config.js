  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],

     theme: {
      screens: {
        'celular': '279px',
        // => @media (min-width: 640px) { ... }
  
        'tablet': '599px',
        // => @media (min-width: 1024px) { ... }
  
        'portatil': '1000px',
        // => @media (min-width: 1280px) { ... }


        'Monitor':'1400px',
      },
    }
   }