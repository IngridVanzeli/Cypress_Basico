const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cguzzx',
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Projeto Básico',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
