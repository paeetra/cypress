describe("Demonstrira click funkciju na wikipediji", () =>{

    it("Odrađuje klikove", () => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
        cy.contains("Contents").click();
        cy.get("a[title='Wikipedia:Contents/Technology and applied sciences']").first().click();
        cy.contains("Software").first().click(); //prvi software koji nađemo u dokumentu
        
        cy.get(body[title="Software development"]);
        // jednu stranicu unazad: cy.go("back")
        // jednu stranicu unaprid: cy.go("forward")
        // dvije stranice prije: cy.go(-2);

        cy.go("back");
        cy.reload();     //reload stranice
        cy.go(1);  
        cy.go(-2);
    })
})