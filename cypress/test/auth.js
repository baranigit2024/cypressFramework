const cypress = require("cypress")

describe("ToolTio", () => {
    it("Tooltip page check", () => {
        cy.visit('https://authenticationtest.com/HTTPAuth/', {
            auth:
            {
                username: Cypress.env('usrName'),
                password: Cypress.env('passWord')
            }
        })
    })

    it("Tooltip page check", () => {
        cy.visit('https://user:pass@authenticationtest.com/HTTPAuth/')
    })

    it("Tooltip page check", () => {
        cy.loginVerify()
    })
})