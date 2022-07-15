describe("Testira search funkciju", ()=>{

    it("Pretražuje stranicu", () =>{
    
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
        
        //1.nacin
        cy.get("#searchInput").type("Quality assurance{enter}");
        
        // 2.nacin
        // cy.get("#searchInput").type("Quality assurance");
        // cy.get("#searchButton").click(); 
        
        cy.url().should("contain", "Quality_assurance");
        cy.get("#searchInput").type("Software development{enter}");
        cy.url().should("contain", "Software_development");

        //1. nacin
        var wikiSearch="Test automation{enter}";
        cy.get("#searchInput").type(wikiSearch);    // ovo ovako jednostavno radi samo za stringove

        //2.nacin
        //cy.get("#searchInput").type(wikiSearch + "{enter}");

        cy.url().should("contain", "Test_automation");
        var currentURL= cy.url();
    
    })
    })