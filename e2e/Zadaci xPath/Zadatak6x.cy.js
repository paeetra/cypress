describe("Testira broj elemenata u tablici Contents", () =>{

    it("Provjerava broj elemenata", () => {
        cy.visit("https://en.wikipedia.org/wiki/Software_testing");

        // [contains(@class, 'ime-klase')] jer xpath dvije klase gleda kao jednu
        cy.xpath("//li[contains(@class,'toclevel-2')]").should("have.length.gte",10);
        cy.xpath("//li[contains(@class,'toclevel-3')]").should("have.length.lte",5);
        cy.xpath("//li[contains(@class,'toclevel-1')]").click({multiple:true});  
    })
})