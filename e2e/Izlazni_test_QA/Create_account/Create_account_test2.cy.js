describe("Registracija s nevazecom godinom rođenja (maloljetni korisnik)", ()=>{

    it("Ispunjava formu za registraciju", () =>{
    
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "automationpractice.com/index.php");
    
        cy.get("a[class='login']").first().click();
        cy.url().should("contain", "index.php?controller=authentication");

        cy.get("input[name='email_create']").type("markoMaticBajic@gmail.com");

        cy.get("button[name='SubmitCreate']").click();
        cy.url().should("contain", "account-creation");
        
        cy.get("div[id='uniform-id_gender1']").first().click();
        cy.get("input[id='customer_firstname']").type("Marko");
        cy.get("input[id='customer_lastname']").type("Matic Bajic");
        cy.get("input[id='email']").click();
        cy.get("input[id='passwd']").type("lozinka123");
        cy.get("#days").select("17");
        cy.get("#months").select("March");
        cy.get("#years").select("2015");
        cy.get("input[id='newsletter']").check();
        cy.get("input[name='address1']").type("Markova adresa 45");
        cy.get("input[id='city']").type("Houston");
        cy.get("#id_state").select("Texas");
        cy.get("input[id='postcode']").type("77002");
        cy.get("#id_country").select("United States");
        cy.get("input[id='phone_mobile']").type("0967895433");
        cy.get("input[id='alias']").type("Home adress");

        cy.get("button[id='submitAccount']").click();
        cy.get(".alert").should("exist").should("contain","User must be at least 18 years old to register");
    })
})