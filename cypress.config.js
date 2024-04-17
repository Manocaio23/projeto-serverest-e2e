const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId:"ora94u",
  e2e: {
    baseUrl:'https://front.serverest.dev/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
