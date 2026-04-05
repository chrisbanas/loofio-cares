# Loofio Cares

React + Vite site for the Loofio Cares landing page.

Original design source:
https://www.figma.com/design/1i8uBzpDn5SlTv8rkIGy2x/Loofio-Cares

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that deploys the built `dist/` output to GitHub Pages on every push to `main`.

After pushing to GitHub:

1. Create the remote repository and push your `main` branch.
2. In GitHub, go to `Settings > Pages`.
3. Set `Source` to `GitHub Actions`.

The Vite config uses a relative asset base, so the site can be served from a project Pages URL without hardcoding the repository name.
  
