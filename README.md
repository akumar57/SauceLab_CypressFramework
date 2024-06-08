# Cypress Automation framework

A basic automation framework for the website https://www.saucedemo.com/, covering 1 checkout flow with 3 products in cypress. This framework can be further scaled to get integrated with kubernetes and jenkins to run remotely

## technologies used

- **Node.js** Installation of node.js is pre-requisite for using cypress as our framework
- **Cypress** as automation framework for web applications
- **JavaScript** as the programming language which is compatible with cypress

## Setup and installation:

1. Install any editor e.g. - visual studio code
2. Install cypress in your machine by running command - npm i cypress --save-dev
3. Post cypress installation,Invoke cypress for the first time by running "npx cypress open"
4. We automatically get a basic folder structure with dummy tests, add a new TC as per our requirement(e.g. saucelabs_checkout_e2e.js) .
5. Install prettier or eslint for formatting purpose using Setting >> extensions >> Prettier - Code Formatter and configure it
6. Ensure to avoid hardwait as much as possible and follow best coding practices like passing baseUrl,username,password from config file instead of hardcoding it directly in spec files

## Covered flows

- Login to the application
- Verify checkout flow by adding 3 products from top and navigating to inventory page
- Add necessary details on inventory page and click continue
