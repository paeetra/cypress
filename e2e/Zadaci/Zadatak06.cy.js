describe("Testira broj elemenata u tablici Contents", () =>{

    it("Provjerava broj elemenata", () => {
        cy.visit("https://en.wikipedia.org/wiki/Software_testing");
        cy.get(".toclevel-2").should("have.length.gte",10);
        cy.get(".toclevel-3").should("have.length.lte",5);
        cy.get(".toclevel-1").click({multiple:true});  
    })
})