import { faker } from "@faker-js/faker";
describe("Cypress useful commands", () => {

    it("open cart registration form", () => {

        let passWord = faker.internet.password()
      cy.visit(
        "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
      );
      cy.get("#input-firstname").type(faker.person.firstName());
      cy.get("#input-lastname").type(faker.person.lastName());
      cy.get("#input-email").type(faker.internet.email());
      cy.get("#input-telephone").type(faker.phone.number());
      cy.get("#input-password").type(passWord);
      cy.get("#input-confirm").type(passWord);
      cy.get("input[type='submit']").click();
      cy.get("label input[type='radio']").check("1", { force: true });
      cy.get("[type='checkbox']").check();
    })
})