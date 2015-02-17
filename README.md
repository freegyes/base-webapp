# Set up a project
## globally required
  - npm
  - bower

## in the project directory
````
npm init
npm install grunt --save-dev
bower init
````

## initialize Gruntfile.js
````
touch Gruntfile.js
````

## scaffolding
````
mkdir app
touch app/index.html
mkdir app/scripts
````

## .bowerrc
````
touch .bowerrc
````
    {
        "directory": "bower_components"
    }

## used npm packages:
- apache-server-configs
- grunt
- grunt-autoprefixer
- grunt-concurrent
- grunt-contrib-clean
- grunt-contrib-concat
- grunt-contrib-connect
- grunt-contrib-copy
- grunt-contrib-cssmin
- grunt-contrib-htmlmin
- grunt-contrib-imagemin
- grunt-contrib-jshint
- grunt-contrib-sass
- grunt-contrib-uglify
- grunt-contrib-watch
- grunt-mocha
- grunt-modernizr
- grunt-newer
- grunt-rev
- grunt-svgmin
- grunt-usemin
- grunt-wiredep
- jshint-stylish
- load-grunt-tasks
- time-grunt

## used bower packages
- backbone // adds underscore as dep
- bootstrap // adds jquery as dep
- fontawesome
- modernizr
- normalize.css

## inject bower packages to html
add code to html
````
<!-- bower:js -->
<!-- endbower -->

<!-- bower:js -->
<!-- endbower -->
````
run grunt wiredep

## to update json files
install with save flags
````
npm install <packagename> --save-dev
bower install <packagename> --save
````
or later
````
npm init
bower init
````

## initialize git repo
````
git init
git remote add origin <repo>
````

## .gitignore
````
touch .gitignore

node_modules
dist
app/bower_components
.tmp
````
    

