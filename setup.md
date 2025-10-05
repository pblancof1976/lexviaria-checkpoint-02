# Receta Vite + React + Tailwind v4
1) npm i -D tailwindcss postcss autoprefixer @tailwindcss/postcss
2) tailwind.config.js → content:["./index.html","./src/**/*.{js,jsx,ts,tsx}"]
3) postcss.config.js → plugins:{"@tailwindcss/postcss":{}}
4) src/index.css → @import "tailwindcss";
5) src/main.jsx → import "./index.css";
6) npm run dev -- --host
