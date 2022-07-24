describe("Testira search funkciju", ()=>{

    it("Pretražuje stranicu", () =>{
    
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
        
        cy.xpath("//input[@id='searchInput']").type("Quality assurance{enter}");
        cy.url().should("contain", "Quality_assurance");
        cy.xpath("//input[@id='searchInput']").type("Software development{enter}");
        cy.url().should("contain", "Software_development");

    
        var wikiSearch="Test automation{enter}";
        cy.xpath("//input[@id='searchInput']").type(wikiSearch);   
        cy.url().should("contain", "Test_automation");
        var currentURL= cy.url();
    
    })
    })