import '@shelex/cypress-allure-plugin'
import {dataCy} from './commands/dataCy'
import {setAllure} from './commands/setAllure'

Cypress.Commands.add('dataCy', dataCy)
Cypress.Commands.add('setAllure', setAllure)
