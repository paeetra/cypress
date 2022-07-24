describe("Testira elemente na stranici Software testing", () =>{

    it("Provjerava elemente", () => {
        cy.visit("https://en.wikipedia.org/wiki/Software_testing");
        cy.get(".toclevel-1").should("have.length",16);
        cy.get(".toclevel-1").first().should("contain.text", "Overview");
        cy.get(".toclevel-1").last().should("contain.text", "External links");
        cy.get("#firstHeading").parent().should("have.id", "content").and("not.have.class", "mw-indicators");        
        
        /* 
        2.nacin
        cy.get("#firstHeading").parent().should("have.id", "content");
        cy.get("#firstHeading").parent().should("not.have.class", "mw-indicators");
        
        3.nacin
        cy.get("#firstHeading").parent().should("have.id", "content").should("not.have.class", "mw-indicators");        

        */
    })
})