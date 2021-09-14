declare global {
  namespace Cypress {
    interface Chainable {
      dataCy: typeof dataCy
    }
  }
}

export const dataCy = (name: string) => {
  cy.get(`[data-test=${name}]`)
}
