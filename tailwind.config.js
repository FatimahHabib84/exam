/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
        {
          mytheme: {
            
  "primary": "#000000",
            
  "secondary": "#232f3e",
            
  "accent": "#aaaaaa",
            
  "neutral": "#ff9900",
            
  "base-100": "#f2f2f2",
            
  "info": "#3d3d3d",
            
  "success": "#ff9900",
            
  "warning": "#ff9900",
            
  "error": "#ff0000",
            },
          },
        ],
      },
  plugins: [require('daisyui')],
}