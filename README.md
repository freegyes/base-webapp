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
mkdir app/bower_components
touch app/index.html
mkdir app/scripts
mkdir app/scripts/vendor
````

## .bowerrc
````
touch .bowerrc
````
    {
        "directory": "app/bower_components"
    }

## used npm packages:
// connect-livereload 
// grunt-contrib-sass
// grunt-open
// matchdep
grunt-bower-task
grunt-contrib-clean
grunt-contrib-concat
grunt-contrib-connect
grunt-contrib-copy
grunt-contrib-less
grunt-contrib-uglify
grunt-contrib-watch
grunt-wiredep
// grunt-bower
// grunt-bowercopy
load-grunt-tasks

## used bower packages
bootstrap // adds jquery as dep
fontawesome
backbone // adds underscore as dep
normalize.css
modernizr

## inject bower packages to html
add code to html
````
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
````
    node_modules
    dist
    app/bower_components
    .tmp

