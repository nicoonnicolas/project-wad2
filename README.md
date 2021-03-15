# Huddle
 
## Installation

### Set up project:
* Clone the project into your WAMP folder at C:\wamp64\www\project-wad2

<br>

### Setting up Sass:
1. Copy the location of the dart-sass folder: e.g. C:\wamp64\www\project-wad2\dart-sass

2. Add the folder to your PATH (Credits to: https://katiek2.github.io/path-doc/)
    * Search for "environmental variables"
    * Under "System Variables", find the PATH variable, select it, and click "Edit". If there is no PATH variable, click "New".
    * Add your directory: e.g. C:\wamp64\www\project-wad2\dart-sass
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

### Run Sass watcher:
    * In a terminal/command prompt:
        ```
        sass --watch C:\wamp64\www\project-wad2\scss\custom.scss C:\wamp64\www\project-wad2\scss\custom.css
        ```
    
    *This will help you to convert your custom.scss to custom.css

<br>