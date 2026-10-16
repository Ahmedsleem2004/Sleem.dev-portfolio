# Ahmed Sleem Portfolio (React + Vite)

    npm install
    npm run dev        # http://localhost:5173
    npm run build      # output in dist/
    npm run preview

- Vercel: import the repo, framework "Vite" (build `npm run build`, output `dist`).
- GitHub Pages: `VITE_BASE=/your-repo/ npm run build`
- Portrait: add `public/images/ahmed-sleem.webp` (shared by Hero and About).
- Project images in `public/images/projects/` are illustrations, not screenshots; replace the files (same names).
- `src/engine/engine.js` holds the original interaction code (3D scene, GSAP scenes, carousels, i18n, themes), started once by `App.jsx`.
