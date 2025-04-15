

describe("ToolTio" ,()=>
{
   it("Tooltip page check" ,()=>
{

cy.visit("https://open.spotify.com/")
cy.once('uncaught:exception', () => false); 
cy.get('[aria-label="Search"]').trigger("mouseover")


cy.get(cy.get('.HjPqU_UW2egr14mRSom9')).should('be.visible').and('have.text','Search')
})
})