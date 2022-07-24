describe("Prikaz stranice na ekranu malih dimenzija", ()=>{

    it("Prikazuje stranicu About us", () =>{
        
        cy.visit("http://automationpractice.com/index.php");
        cy.viewport('iphone-6');

        cy.url().should("contain", "automationpractice.com/index.php");
    
        cy.get("#block_various_links_footer").click();
        cy.get("a[title='About us']").click();
        cy.url().should("contain", "index.php?id_cms=4&controller=cms");  

    })
})