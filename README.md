Topics Covered
Cypress Basics

Notes:
Command for running from commandline including the env variables
-- npx cypress run --spec cypress/integration/examples/Test_8.js --headed --browser chrome --env url="https://rahulshettyacademy.com"

command for running and uploading a record to the cloud
-- npx cypress run --record --key 9270ddf3-2b6a-4ec1-ad33-642f03d2b83c --spec cypress/integration/examples/\*.js

Scripts
"test": "npx cypress run",
"headTest": "npx cypress open",
"record": "npx cypress run --record --key 9270ddf3-2b6a-4ec1-ad33-642f03d2b83c",
"chromeTest": "npx cypress run test --browser chrome",
"projectName": "npx cypress run --spec \"cypress/integration/projectName/\*\""


