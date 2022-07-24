describe("Predaja prazne forme za registraciju", ()=>{

    it("Predaje praznu formu", () =>{
    
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "automationpractice.com/index.php");
    
        cy.get("a[class='login']").first().click();
        cy.url().should("contain", "index.php?controller=authentication");

        cy.get("input[name='email_create']").type("markoMaticBajic@gmail.com");

        cy.get("button[name='SubmitCreate']").click();
        cy.url().should("contain", "account-creation");
        
        cy.get("button[id='submitAccount']").click();
        cy.get(".alert").should("exist").should("contain","There are 8 errors");

    })
})