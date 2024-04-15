const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId:"ora94u",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
