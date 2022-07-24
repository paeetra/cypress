describe("Testira stranicu Software testing", () =>{

    it("Pretražuje stranicu", () => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
        cy.xpath("//input[@id='searchInput']").type("Software testing{enter}");
        cy.url().should("contain","Software_testing");
        cy.contains("Software testing").should("have.length.gte",1);
        cy.contains("Hamburger").should("not.exist");

        cy.xpath("//h1").should("have.length",1);
        cy.xpath("//h2").should("have.length.gte",1);
        cy.xpath("//h4").should("have.length.lte",5);

    })
})