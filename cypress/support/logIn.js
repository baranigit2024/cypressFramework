
import login from '../fixtures/login.json'

Cypress.Commands.add("login" ,()=>
{
    cy.visit( "https://ecommerce-playground.lambdatest.io/index.php?route=account/login" );
cy.get("#input-email").type(login.userid);
cy.get("#input-password").type(login.password);
cy.get('input[type ="submit"]').click()

})