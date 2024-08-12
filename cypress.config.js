const { defineConfig } = require('cypress')
const excelToJson = require('convert-excel-to-json')
const fs = require('fs')
var excelJs = require('exceljs')

module.exports = defineConfig({
  projectId: '5bcxqu',
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: 'https://rahulshettyacademy.com',
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      //  config.db = {
      //    userName: 'userrname',
      //    password: 'password',
      //    server: 'ard-db.database.windows.net',
      //    options: {
      //      database: 'ard-db',
      //      encrypt: true,
      //      rowCollectionOnRequestCompletion: true,
      //    },
      //  },
      require('cypress-mochawesome-reporter/plugin')(on)
      // tasks = sqlServer.loadDBPlugin(config.db);
      // on('task',tasks)
      on('task', {
        excelToJsonConverter(filepath) {
          const result = excelToJson({
            source: fs.readFileSync(filepath),
          })
          return result
        },
      })
      on('task', {
        async writeExcel({ searchText, replaceText, change, filePath }) {
          const workbook = new excelJs.Workbook()
          await workbook.xlsx.readFile(filePath)
          const worksheet = workbook.getWorksheet('Sheet1')
          const output = await readExcel(worksheet, searchText)
          worksheet.getCell(output.row, output.col + change.colChange).value =
            replaceText
          await workbook.xlsx
            .writeFile(filePath)
            .then(() => {
              return true
            })
            .catch((error) => {
              return false
            })
          return null;
        },
      })
    },
    specPattern: 'cypress/integration/examples/*.js',
  },
})
async function readExcel(worksheet, searchText) {
  let output = { row: -1, col: -1 }
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rowNumber
        output.col = colNumber
      }
    })
  })
  return output
}