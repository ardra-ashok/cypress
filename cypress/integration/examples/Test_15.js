const { log } = require('console')

const neatCSV = require('neat-csv')
let productName
describe('JWT Session', function () {
  it('Test', function () {
    cy.LoginAPI().then(function () {
      cy.visit('https://rahulshettyacademy.com/client', {
        onBeforeLoad: function (window) {
          window.localStorage.setItem('token', Cypress.env('token'))
        },
      })
    })
    cy.get('.card-body b')
      .eq(1)
      .then(function (ele) {
        productName = ele.text()
      })
    cy.get('.card-body button:last-of-type').eq(1).click()
    cy.get("[routerlink*='cart']").click()
    cy.contains('Checkout').click()
    cy.get("[placeholder*='Country']").type('ind')
    cy.get('.ta-results button').each(($e1, index, $list) => {
      if ($e1.text().trim() === 'India') {
        cy.wrap($e1).click()
      }
    })
    cy.get('.action__submit').click()
    cy.wait(2000)
    cy.get('.order-summary button').eq(1).click()
    // cy.get('.order-summary button').contains('Excel').click()
    const fileName =
      Cypress.config('fileServerFolder') +
      '/cypress/downloads/order-invoice_anshika.xlsx'
    cy.task('excelToJsonConverter', fileName).then(function (result) {
      expect(productName).to.equal(result.data[1].B)
    })
   
   // code to check whether content is present in the pdf document
   cy.readFile(filePath).then((text)=> {
    expect(text).to.include(productName)
   })
   
  })
})
