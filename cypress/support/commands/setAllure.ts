declare global {
  namespace Cypress {
    interface Chainable {
      setAllure: typeof setAllure
    }
  }
}

import {Severity} from '../../../node_modules/@shelex/cypress-allure-plugin/reporter/index'

export const setAllure = (severity: Severity, tag: string) => {
  cy.allure().severity(severity).tag(tag)
}
