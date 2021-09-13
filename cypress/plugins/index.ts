/// <reference path="../support/index.d.ts" />

const allureWriter = require('@shelex/cypress-allure-plugin/writer')
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  allureWriter(on, config)
  if (config.env.version === 'prod') {
    config.baseUrl = 'https://example.cypress.io'
  }
  return config
}
