# Developer Guide

## Getting Started
Recommends going through this [video](https://www.youtube.com/watch?v=_oO4Qi5aVZs), as it is the main reference for the project structure and has comprehensive step-by-step tutorial on how to build the project with similar tech stack and componenents from scratch.

If this is your first React project, the video will also help you to install necessary dependencies required to develop the application.

## Project Structure and Layout
The main repository of this project, [groundzero](), contains all the code and dependencies for building the [GroundZero web application]().

Inside [groundzero](), there are:
1. [node_modules](), do not tamper with this.
2. [public](), let's just have it for the sake of having it for now.
3. [src](), contains the code used to create the web application.
4. Several other dependencies files. Do not tamper with these.

Inside [src](), there are:
1. [assets](), contains all images and media.
2. [components](), contains parts of the web application, e.g., `About`, `NavigationBar`, etc. Please read `index.js` inside this folder before starting out.
3. [constants](), contains list of static texts that will be displayed in the actual web. Please refer to `index.js`.
4. [App.jsx](), is the main entry of the application. Important: please give a quick read to understand how the components are structured.
5. [index.css](), contains styling customization for fonts and colors. Add your customization here for better usability.
6. [main.jsx](), renders the `App.jsx`.
7. [style.js](), contains styling customization for sizes, paddings, layouts, etc. You can add more customization here to suit your needs.
