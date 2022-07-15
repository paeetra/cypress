describe("Testira stranicu Software testing", ()=>{

    it("Pretražuje stranicu", () =>{
    
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
        cy.get("#searchInput").type("Software testing{enter}");
        cy.url().should("contain", "Software_testing");
        cy.contains("Software testing").should("have.length.gte",1);
        cy.contains("Hamburger").should("not.exist");

        //cy.get("#content").should("contain", "Software testing");       ne dohvacati content, iako radi, vraca puno vise elemenata nego sto nam treba
        //cy.get("#content").should("not.contain", "Hamburger");          nije best practice
    
        cy.get('h1').should("have.length",1);
        
        //cy.get('h2').should("exist");
        
        cy.get('h2').should("have.length.gte",1);
        cy.get('h4').should("have.length.lte",5);
    })
    })