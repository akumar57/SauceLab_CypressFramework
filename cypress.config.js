const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/", // Set your base URL here
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Spec pattern for test files
    supportFile: "cypress/support/e2e.js", // Path to support file
    username: "standard_user",
    password: "secret_sauce",
  },
  viewportWidth: 1000,
  viewportHeight: 660,
  video: true, // Enable video recording
  retries: {
    runMode: 2, // Number of retries in run mode
    openMode: 0, // Number of retries in open mode
  },
  env: {
    // Add custom environment variables here
    exampleVariable: "value",
  },
});
