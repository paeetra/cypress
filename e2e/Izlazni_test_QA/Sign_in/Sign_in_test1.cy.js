describe("Prijava s ispravim podacima", ()=>{

    it("Upisuje ispravan email i lozinku", () =>{
    
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "automationpractice.com/index.php");
    
        cy.get("a[class='login']").first().click();
        cy.url().should("contain", "index.php?controller=authentication");

        cy.get("input[id='email']").type("ante17@gmail.com");
        cy.get("input[id='passwd']").type("antinasifra");

        cy.get("button[id='SubmitLogin']").click();
        cy.url().should("contain", "controller=my-account");

    })
})