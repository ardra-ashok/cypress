import 'cypress-iframe'

describe('Handling child windows', function () {
  it('Should handle chid window', function () {
    cy.visit(Cypress.env('url') + '/AutomationPractice/')

    cy.get('#opentab').then(function (el) {
      const url = el.prop('href')
      cy.visit(url)
      cy.wait(1000)
      cy.origin(url, () => {
        cy.get("div.sub-menu-bar a[href*='about']").click()
      })
    })
  })
})
