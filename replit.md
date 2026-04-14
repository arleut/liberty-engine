# liberty-engine

A free and modular game engine focused on creative freedom.

## Project Overview

This project is in its early stages. Currently it serves a static landing page while the engine is being developed.

## Tech Stack

- **Frontend**: Plain HTML/CSS (no framework yet)
- **Dev Server**: `serve` (npm package) on port 5000
- **License**: MIT

## Project Structure

```
.
├── index.html        # Main landing page
├── package.json      # npm config and dev script
├── LICENSE           # MIT License
├── README.md         # Project readme
└── .gitignore        # Node.js gitignore
```

## Development

The project uses a simple static file server for development:

```bash
npm run dev
```

This starts `serve` on port 5000.

## Deployment

Configured as a **static** deployment — serves `index.html` and any static assets directly.

## Notes

- The `.gitignore` targets a Node.js/TypeScript ecosystem, suggesting the engine will be built with JavaScript/TypeScript.
- Future work will likely introduce a build system (Vite, etc.) and source files.
