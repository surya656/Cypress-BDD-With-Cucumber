const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  reporter: 'mochawesome',
  env: {
    url: 'http://qalab.pl.tivixlabs.com/',
  },
  retries: {
    runMode: 2,
  },
  

  e2e: {
    setupNodeEvents(on, config) {
    on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/BDD/*.feature'
  },
});
