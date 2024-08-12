describe('Database Testing', function () {
 it('Test', function () {
  cy.sqlServer("select * from Persons").then(function (result) {
    cy.log(result[0][1])
   })
  })
})