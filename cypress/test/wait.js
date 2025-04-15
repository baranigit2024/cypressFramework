

describe("ToolTio" ,()=>
    {
       it("Tooltip page check" ,()=>
    {
    
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
  //  cy.once('uncaught:exception', () => false); 
    cy.get('#input-email',{timeout:0}).type("mouseover")
    
    })
    })