describe("Slanje kontakt forme bez poruke", ()=>{

    it("Šalje kontakt formu", () =>{
        
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "automationpractice.com/index.php");
    
        cy.get("a[href='http://automationpractice.com/index.php?controller=contact']").first().click();
        cy.url().should("contain","index.php?controller=contact");

        cy.get("#id_contact").select("Customer service");
        cy.get("input[id='email']").type("email@email.com");
        cy.get("input[id='id_order']").type("C456");
        cy.get("button[id='submitMessage']").click();
        
        cy.get(".alert").should("exist").should("contain","The message cannot be blank.");

    })

})