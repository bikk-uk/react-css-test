import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'hksco8',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:40000',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    excludeSpecPattern: process.env.CI ? ['cypress/e2e/all.spec.ts'] : [],
  },
})
