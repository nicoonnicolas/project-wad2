# Huddle
A platform to easily find and book co-working spaces that suit your needs. 
 
## Installation

### Set up project:
* Place the project into your WAMP folder at C:\wamp64\www\

<br>

### Set up Sass:
1. Copy the location of the dart-sass folder: e.g. C:\wamp64\www\app\dart-sass

2. Add the folder to your PATH (Credits to: https://katiek2.github.io/path-doc/)
    * Search for "environmental variables"
    * Under "System Variables", find the PATH variable, select it, and click "Edit". If there is no PATH variable, click "New".
    * Add your directory: e.g. C:\wamp64\www\app\dart-sass
    * Click "OK".
    * Restart your terminal.

3. Check that Sass has been installed
    * Open up a terminal/command prompt
    * Check that it has been successfully installed using:

        ```
        sass --version
        ```
    * It should state

        ```
        1.32.8
        ```


## Run

### Run Sass watcher:
* In a terminal/command prompt:
    ```
    sass --watch C:\wamp64\www\project-wad2\scss\custom.scss C:\wamp64\www\project-wad2\scss\custom.css
    ```
* It should state
    ```
    Sass is watching for changes. Press Ctrl-C to stop.
    ```
    
* This will help you to convert your custom.scss to custom.css when there are changes to the custom.scss file
    ```
    Compiled C:\wamp64\www\app\scss\custom.scss to C:\wamp64\www\app\scss\custom.css.
    ```

<br>

### Run WAMP:
* Run your WAMP server to serve the app


## Use
* Visit http://localhost/app/ to start making bookings!