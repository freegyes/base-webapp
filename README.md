# base webapp
## globally required package managers
  - [npm](https://www.npmjs.com/) 
    - comes with [NodeJS](http://nodejs.org/)
    - don't hack with permissions, [fix the ownership](http://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo)
  - [bower](http://bower.io/)
````
npm install -g bower
````

## initialize the package managers and install packages
in the project directory:
````
npm init
npm install --save-dev <package_name> // --save-dev will update the json
````
for this specific Gruntfile to work you need the following packages:
````
npm install --save-dev apache-server-configs grunt grunt-autoprefixer grunt-concurrent grunt-contrib-clean grunt-contrib-concat grunt-contrib-connect grunt-contrib-copy grunt-contrib-cssmin grunt-contrib-htmlmin grunt-contrib-imagemin grunt-contrib-jshint grunt-contrib-sass grunt-contrib-uglify grunt-contrib-watch grunt-mocha grunt-modernizr grunt-newer grunt-rev grunt-svgmin grunt-usemin grunt-wiredep jshint-stylish load-grunt-tasks time-grunt
````
then initiate bower
````
bower init
bower install --save <package_name> // --save will update the json
````
I usually start with these:
````
bower install --save bootstrap fontawesome normalize.css modernizr
````
(bootstrap adds jquery as a dependency)

## run grunt
in the project directory during development:
````
grunt serve 
````
on any change in the app folder:
- lints js
- compiles sass
- updates html with bower installed dependencies
- reloads the page in the browser

on build:
````
grunt build
````
- makes a pretty build of your project in the dist folder