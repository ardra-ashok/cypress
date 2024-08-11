describe('My First Test Suite', function () {
 it('My FirstTest case', function () {
  cy.request('POST', Cypress.env('url') + '/Library/Addbook.php?', {
    name: 'My Unique Book1',
    isbn: '889988uuutt',
    aisle: '234',
    author: 'John Foeu',
  }).then((res) => {
    expect(res.status).to.eq(200)
   cy.log(res.body.length)
   expect(res.body).to.have.property('Msg', 'successfully added')
   cy.request('GET', Cypress.env('url') + '/Library/GetBook.php?AuthorName=John Foeu')
  })
 })
})