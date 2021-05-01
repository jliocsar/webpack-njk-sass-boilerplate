
# Webpack, Sass & Nunjucks Boilerplate

## What is it ❓

This repo is a boilerplate to start a simple Webpack project using Sass/SCSS for styles and Nunjucks as the template engine. I was honestly bored of always doing the same stuff, so why not.

## Dependencies 🍔

- @babel/core for Babel's compiler core
- @babel/preset-env for the latest JavaScript standards
- babel-loader as JS transpiler
- sass-loader for Sass/SCSS-to-CSS compiler
- css-loader to treat the @import, url(), etc.
- mini-css-extract-plugin to extract the CSS in separated files
- nunjucks-render-loader was the only loader working for Nunjuck-to-HTML that I could find for Webpack
- optimize-css-assets-webpack-plugin to minify the CSS output
- webpack (core) & webpack-cli
- webpack-dev-server to use the live server
- webpack-dashboard for a nice dashboard in dev mode

## Scripts 📜

- Run the live server (hot-reload) in debug mode & dev mode (available @ localhost:3000):

		yarn server

- Build in dev. mode:

		yarn build:dev

- Build in prod. mode:

		yarn build:prod

> Written with [StackEdit](https://stackedit.io/).
