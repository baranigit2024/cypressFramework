

describe("ToolTio" ,()=>
{
   it("Tooltip page check" ,()=>
{

cy.visit("https://practice.expandtesting.com/tooltips")
cy.get('#btn1').trigger("mouseover")

cy.get('.tooltip-inner').should('be.visible').and('have.text','Tooltip on top')
})
})