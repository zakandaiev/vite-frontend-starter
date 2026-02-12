<img width=150 align="right" src="https://raw.githubusercontent.com/zakandaiev/vite-frontend-starter/main/src/img/vite-logo.svg" alt="Vite Logo">

# vite-frontend-starter

Vite FrontEnd Starter is a boilerplate kit for easy building modern static web-sites using Vite builder

## Homepage
[https://zakandaiev.github.io/vite-frontend-starter](https://zakandaiev.github.io/vite-frontend-starter)

## Features
* Modern Vite environment for development
* Twig template engine
* Well thought-out and convenient project structure
* HTML5 and CSS3 ready
* SEO friendly
* SASS/SCSS preprocessor
* Autoprefixer
* Live-server with hot-reload
* HTML, CSS, JS, images auto minifier
* Ready-to-use Javascript utils, HTML styled components, CSS helpers, SASS utils etc.
* reseter.css
* .htaccess, robots.txt, sitemap.xml, favicon
* 404 page
* And many more...

## How to use

Prerequisites: [Node.js](https://nodejs.org/) (`>=22`)

### Install

``` bash
# Clone the repository
git clone https://github.com/zakandaiev/vite-frontend-starter.git

# Go to the folder
cd vite-frontend-starter

# Install
npm i
# or
npm install

# Remove link to the original repository
# - if you use Windows system
Remove-Item .git -Recurse -Force
# - or if you use Unix system
rm -rf .git
```

### Develop

``` bash
# Start development mode with live-server
npm run dev
# or with options
npm run dev -- --port=3000
```

### Build

``` bash
# Build static files for production
npm run build
# or with options
npm run build -- --base=/subdomain --outDir=./dest

# Start server for build preview
npm run preview
# or with options
npm run dev -- --port=3001
```

### Lint

``` bash
# ESLint
npm run lint:js
# or
npm run lint:js:fix

# StyleLint
npm run lint:css
# or
npm run lint:css:fix
```

### Backend emulation

``` bash
# Fastify listen backend.js
npm run backend
```
