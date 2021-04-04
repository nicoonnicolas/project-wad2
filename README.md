# Huddle
A platform to easily find and book co-working spaces that suit your needs. 

***
## Installation

### Set up project:
* Place the project (app) into your WAMP folder at C:\wamp64\www\

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

***

## Run

### Run Sass watcher:
* In a terminal/command prompt:
    ```
    sass --watch C:\wamp64\www\app\scss
    ```
* It should state
    ```
    Sass is watching for changes. Press Ctrl-C to stop.
    ```
    
* This will help you to convert your scss files to css files when there are changes to the scss files
    * For example: custom.scss
        ```
        Compiled C:\wamp64\www\app\scss\custom.scss to C:\wamp64\www\app\scss\custom.css.
        ```

<br>

### Run WAMP:
* Run your WAMP server to serve the app

***

## Use

### Using the app:
* Visit http://localhost/app/ to start making bookings!

### Making PayPal transactions:
* Under http://localhost/app/payment.html, paypal transactions can be made using the following PayPal account:    
    * Email: sarahwoon@gmail.com
    * Password: 2G?yV/pI

***

## Credits
* Penguin Image from [felizanonuevo](https://muuseo.com/felizanonuevo#floor)