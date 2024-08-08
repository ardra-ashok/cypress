describe('Third test suite', function () {
  it('My first case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.wait(2000)

    // Handling Alerts
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        'Hello , share this practice page and share your knowledge'
      )
    })
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
  })
})
