import loc from '../support/locators'
import { faker } from '@faker-js/faker/locale/pt_BR';
import { Utility } from "../support/utility"
import messages from '../support/validationMessages'

const urlRequest = new Utility().getApiUrl();
const url = new Utility().getBaseUrl();

Cypress.Commands.add('validateText', (locator, text) => {
    cy.get(locator).scrollIntoView().should('have.text', text)
        .and('be.visible')
})

Cypress.Commands.add('validateTextContains', (text) => {
    cy.contains(text)
        .should('have.text', text)
        .and('exist')
        .and('be.visible');
});
Cypress.Commands.add('typeText', (locator, text) => {
    cy.get(locator).type(text).should('have.value', text)
})

Cypress.Commands.add('isVisible', (locator, text) => {
    cy.get(locator).should('be.visible').and('exist')
})

Cypress.Commands.add('clickMouse', (locator) => {
    cy.get(locator)
        .scrollIntoView()
        .should('be.visible')
        .click()
})