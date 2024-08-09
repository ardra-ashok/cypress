describe('Second test suite', function () {
  it('My first case', function () {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.products').as('productLocator')
    cy.get('@productLocator')
      .find('.product')
      .each(($el, index, $list) => {
        const veg_name = $el.find('h4.product-name').text()
        if (veg_name.includes('Cashews')) {
          cy.wrap($el.find('button')).click()
        }
      })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
  })
})
