describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/todo')
  })

  const todosTitles = ['Pay electric bill', 'Walk the dog']
  const verifyList = (length: number) => {
    cy.dataCy('new-todo')
    cy.get('.todo-list li').should('have.length', length)
    cy.get('.todo-list li').each((item, index) => {
      cy.wrap(item).should('have.text', todosTitles[index])
    })
  }

  it('displays two todo item by default', () => {
    cy.setAllure('minor', 'smoke')
    const pages = ['Utilities', 'Cypress API']
    pages.forEach(page => {
      cy.contains(page).each(page => {
        cy.request(page.prop('href'))
      })
    })
    verifyList(2)
  })
  it('can add new todo items', () => {
    cy.allure().severity('minor').tag('smoke')
    const newItem = 'Feed the cat'
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })
  it('can check off an item as completed', () => {
    cy.allure().severity('minor').tag('smoke')
    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()
    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')
  })
  context('with a checked task', () => {
    beforeEach(() => {
      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
    })

    it('can filter for uncompleted tasks', () => {
      cy.allure().severity('minor').tag('smoke')
      cy.contains('Active').click()
      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog')
      cy.contains('Pay electric bill').should('not.exist')
    })

    it('can filter for completed tasks', () => {
      cy.allure().severity('minor').tag('smoke')
      cy.contains('Completed').click()
      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')

      cy.contains('Walk the dog').should('not.exist')
    })

    it('can delete all completed tasks', () => {
      cy.allure().severity('minor').tag('smoke')
      cy.contains('Clear completed').click()
      cy.get('.todo-list li')
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill')
      cy.contains('Clear completed').should('not.exist')
    })
  })
})
