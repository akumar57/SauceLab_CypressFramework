# Cypress Automation framework

A basic automation framework for the website https://www.saucedemo.com/, covering 1 checkout flow with 3 products in cypress. This framework can be further scaled to get integrated with kubernetes and jenkins to run remotely

## technologies/external dependecies used needs to be installed

- **Node.js** Installation of node.js is pre-requisite for using cypress as our framework
- **Cypress** as automation framework for web applications
- **JavaScript** as the programming language which is compatible with cypress
- **Mochawsome** for report generation in html format

## Setup and installation:

1. Install any editor e.g. - visual studio code
2. Install cypress in your machine by running command - **npm i cypress --save-dev**
3. Post cypress installation,Invoke cypress for the first time by running **"npx cypress open"**
4. Once the run is complete, **We will get mochawsome report html along with cypress video** to see the run result

## Covered flows

- Login to the application
- Verify checkout flow by adding 3 products from top and navigating to inventory page
- Add necessary details on inventory page and click continue
