describe("Provjera URL statusa", ()=>{

it("Otvara i provjerava URL", () =>{

    cy.visit("https://en.wikipedia.org/wiki/Main_Page");
    
    // should( "uvjet", "sto trazimo")
    cy.url().should("contain", "Main_Page");

    cy.contains("About Wikipedia").first().click();
    cy.url().should("contain", "Wikipedia:About");
    cy.url().should("not.contain", "Main_Page");
})
})