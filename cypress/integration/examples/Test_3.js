describe('Third test suite', function () {
  it('My first case', function () {
    // Drop Downs
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.wait(2000)
    cy.get('#checkBoxOption1')
      .check()
      .should('be.checked')
      .and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('#checkBoxOption2')
      .uncheck()
      .should('not.be.checked')
      .and('have.value', 'option2')
    cy.get('input[type="checkbox"]').check(['option2', 'option3'])

    // Dropdown
    cy.get('select').select('option2').should('have.value', 'option2') // by value

    //  Dynamic dropdown
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if ($el.text() === 'India') $el.click()
    })
    cy.get('#autocomplete').should('have.value', 'India')

    // Handling visible and invisible element
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
   cy.get('#displayed-text').should('be.visible')
   
   // Radio button
   cy.get('input[value="radio2"]').check().should('be.checked')
   

  })
})
