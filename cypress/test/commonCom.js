import { faker } from "@faker-js/faker";
import login from '../fixtures/login.json'
describe("Cypress useful commands", () => {

    it("open cart registration form", () => {

      cy.login()

      cy.get('[name="search"]').eq(0).type("Macbook");
     // cy.get('button[fdprocessedid="bblgju"]').click()
     // cy.get('button[type="submit"].type-text').click()
      cy.get('.type-text').click()
      cy.contains("Search - Macbook").should('be.visible')
     
    })
})