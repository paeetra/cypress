describe("Testira funkcionalnost navigacije", () =>{

    beforeEach(() => {
        cy.visit("https://en.wikipedia.org/wiki/Main_page");      
    })

    it("Otvara stranicu Current events", () => {
        cy.url().should("contain", "Main_page");
        cy.get("#n-currentevents").click();
        cy.url().should("contain", "Portal:Current_events");
    });

   it("Otvara stranicu Contents", () => {
        cy.url().should("contain", "Main_page");
        cy.get("a[href='/wiki/Wikipedia:Contents']").click();
        cy.url().should("contain", "Wikipedia:Contents");
                
    });

    it("Otvara stranicu Random article", () => {
        cy.url().should("contain", "Main_page");
        cy.get("#n-randompage").click();
        cy.url().should("not.contain", "Main_page");
    });

})