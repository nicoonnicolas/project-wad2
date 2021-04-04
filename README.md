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

### Login Methods:
* Under http://localhost/app/, users can login via 2 methods:

* Gmail
    *nickwijaya.is216@gmail.com
    * Password: i<3IS216

* Facebook
    * Facebook Login: nickwijaya.is216@gmail.com
    * Password: i<3IS216

### Making Payments:
* Under http://localhost/app/payment.html, transactions can be made via PayPal through 2 payment methods:
* PayPal Account
    * Email: sarahwoon@gmail.com
    * Password: 2G?yV/pI
* Credit Card Account
    * Credit Card Number: 4096 3663 7405 2639
    * Expirty Date: 04/26
    * CVV: 123
    * All other inputs (Name, Address, Postal Code, Phone Number) may be randomly filled in as this is a fake credit card account.


***

## Credits
* Penguin Image from [felizanonuevo](https://muuseo.com/felizanonuevo#floor)