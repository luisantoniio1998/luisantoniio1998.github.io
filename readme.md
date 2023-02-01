# About
Minimal is a modern fully responsive theme for personal resumes and portfolios based on latest Bootstrap (4.4.1).
It contains components designed for professional persons and freelancers which present your experiences, skills, references, projects and services.

# Credits
- [jQuery](https://jquery.com/)
- [Bootstrap](https://getbootstrap.com/)
- [SmoothScroll](http://iamdustan.com/smoothscroll/)
- [Google Fonts](https://www.google.com/fonts)
- [Popper.js](https://popper.js.org/)

# Structure
-- assets  
---- css (styles)  
---- img (images, icons)  
---- js (javascript)  
-- dist (builded files)  
---- css (buildes styles)  
---- js  (buildes javascript)  
-- .browserslistrc (postcss setup)    
-- 404.html (HTTP Error page)  
-- components.html - (all Boostrap components with custom styles)  
-- Gruntfile.js (dev and build Grunt setup - https://gruntjs.com/)  
-- index.html (protfolio web)  
-- package.json (dependencies) 

# Dev requirements
- [Node.js](https://nodejs.org/)  
- [NPM](https://www.npmjs.com/)  

# Dev commands
npm install - install all dependencies   
grunt - run Browsersync, watch file changes and live reload page when .css or js files change
grunt build - build CSS and JS

# Styles structure
-- components (all components styles)
-- type (common styles, eg. typographics)
-- layout (layout and grid styles)
-- mixins
-- themes (color themes)
-- _variables.scss (custom variables)
-- _variables-cleaner.scss (clean unnecessary bootstrap variables)
-- main.scss (entrypoint)

## How to change theme
1. open /assets/css/main.scss
2. comment/uncomment theme (rows 8 - 11)
3. run grunt build
