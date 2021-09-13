/// <reference path="../support/index.d.ts" />

Cypress.Commands.add('dataCy', value => cy.get(`[data-test=${value}]`))
