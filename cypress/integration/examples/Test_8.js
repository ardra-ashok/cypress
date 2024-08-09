/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('Handling child windows', function () {
  it('Should handle child window', function () {
    cy.visit(Cypress.env('url') + '/AutomationPractice/')
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    cy.wait(2000)
    cy.iframe()
      .find("button[class*='mentorshipJoinBtn']")
     .should('have.length', 1)
    // cy.wait(2000)
    cy.iframe()
      .find("h1[class*='pricing-title']")
      .should('have.length', 2)
  })
})
