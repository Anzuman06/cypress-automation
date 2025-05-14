const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      "baseUrl": 'https://www.saucedemo.com/',
      "chromeWebSecurity": false ,// disable from iframe-heavy
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
      video: true, // ✅ Enable video recording
      screenshotOnRunFailure: true, // optional: only take screenshots on failures
      screenshotsFolder: 'cypress/screenshots',
      videosFolder: 'cypress/videos'
    },
  });

