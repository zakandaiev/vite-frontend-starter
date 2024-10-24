<img width=150 align="right" src="https://raw.githubusercontent.com/zakandaiev/vite-frontend-starter/main/src/img/vite-logo.svg" alt="Vite Logo">

# Vite FrontEnd Starter

Vite FrontEnd Starter is a boilerplate kit for easy building modern static web-sites using Vite builder

## Homepage
[https://zakandaiev.github.io/vite-frontend-starter](https://zakandaiev.github.io/vite-frontend-starter)

## How to use

### Instalation

``` bash
# Clone the repository
git clone https://github.com/zakandaiev/vite-frontend-starter.git

# Go to the folder
cd vite-frontend-starter

# Install packages
npm i

# Remove the link to the original repository
# - if you use Windows system
Remove-Item .git -Recurse -Force
# - or if you use Unix system
rm -rf .git
```

### Development

``` bash
# Start development mode with live-server
npm run dev
```

### Building

``` bash
# Build static files for production
npm run build
# or
npm run prod

# Start server for build preview
npm run preview
```

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

## TODO
* vite's config `base` not appends to anchors in html files, so we have got the htmlHandleDocsBase() in `vite.config.js` as temp solution
