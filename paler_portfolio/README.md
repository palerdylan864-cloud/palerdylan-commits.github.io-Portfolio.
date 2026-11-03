# Portfolio

A premium, dark, cinematic developer portfolio built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

## Running it

Just open `index.html` in a browser. No installation, npm, or server required.

## Structure

```
Portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── profile.jpg
│   ├── project-1.jpg / project-2.jpg / project-3.jpg
│   └── project images and profile.jpg
└── README.md
```

## What to replace first

1. **Your photo & name** — swap `assets/profile.jpg` (currently a placeholder) and replace "Jandem" throughout `index.html` (nav, hero eyebrow isn't literal but check hero copy, footer, page `<title>`).
2. **Projects & tech stack** — all content lives in `script.js` at the top, in the `projects` and `technologies` arrays. Edit those objects; the grids re-render automatically.
3. **Project images** — replace the files in `assets/` with your real screenshots, keeping the same filenames (or update the `image` paths in `script.js`).
4. **Contact info & social links** — update the email address and social `href`s in the Contact section and footer of `index.html`.
5. **Contact form** — the form validates on the frontend and shows a success state, but doesn't send anywhere yet. Wire it to a real backend or a service like Formspree/EmailJS inside the `submit` handler in `script.js` (see the comment marked `// Frontend-only success state`).

## Theming

All colors live as CSS variables at the top of `style.css` under `:root`. Change `--bg`, `--accent`, etc. to re-theme the whole site without touching any other rule.

## Notes

- Respects `prefers-reduced-motion` (disables the background effects and other animations).
- Tabs, modals, mobile menu, scroll reveal, and form validation are all vanilla JS — no dependencies.
- The custom cursor is desktop-only and disables itself on touch devices.
