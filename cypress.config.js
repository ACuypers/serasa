const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    //baseUrl: 'https://api.trello.com',
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
  },
  env: {
    //Ter um prorpio .env
    TRELLO_API_KEY: '', // Sua API Key do Trello
    TRELLO_TOKEN: '', // Seu Token do Trello
  }
});