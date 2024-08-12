
context('Waiting', () => {
 let data
 beforeEach(() => {
  cy.visit('https://example.cypress.io/commands/waiting')
  cy.sqlServer("select * from Persons").then(function (result) {
   cy.log(result[0][1])
   data = result
  })
 })
})

it('testing', () => {
 cy.get('.wait-input1').type(data[0][1])
 cy.wait(1000)
 cy.get('.wait-input2').type(data[0][1])
 cy.wait(1000)
 cy.get('.wait-input3').type(data[0][1])
 
})







