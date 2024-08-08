describe('First test suite', function () {
  it('My first case', function () {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.products').as('productLocator')
    cy.get('.product:visible').should('have.length', 4)
    cy.get('@productLocator').find('.product').should('have.length', 4)
    cy.get(':nth-child(3) > .product-action > button')
    cy.get('@productLocator')
      .find('.product')
      .eq(2)
      .contains('ADD TO CART')
      .click()
      .then(function () {
        console.log('test')
      })
    cy.get('@productLocator')
      .find('.product')
      .each(($el, index, $list) => {
        const veg_name = $el.find('h4.product-name').text()
        if (veg_name.includes('Cashews')) {
          cy.wrap($el.find('button')).click()
        }
      })
    cy.get('.brand').should('have.text', 'GREENKART')
    cy.get('.brand').then(function (logoElement) {
      cy.log(logoElement.text())
    })
  })
})
