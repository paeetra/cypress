describe("Zaboravljena lozinka za racun koji ne postoji", ()=>{

    it("Pokušava oporaviti lozinku", () =>{
    
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "automationpractice.com/index.php");
    
        cy.get("a[class='login']").first().click();
        cy.url().should("contain", "index.php?controller=authentication");

        cy.get("a[title='Recover your forgotten password']").click();
        cy.url().should("contain", "controller=password");

        cy.get("input[id='email']").type("nekidrugimail@hotmail.hr");
        cy.get("button[type='submit']").contains("Retrieve Password").click();

        cy.get(".alert").should("exist").should("contain","There is no account registered for this email address.");

    })
})