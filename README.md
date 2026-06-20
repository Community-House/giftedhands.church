# Gifted Hands Church

Static React site for [giftedhands.church](https://giftedhands.church), built with Vite and deployed to GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The GitHub Pages workflow in `.github/workflows/deploy.yml` builds the site on every push to `main` and publishes the `dist` folder. The custom domain is configured through `public/CNAME`.
