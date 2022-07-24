describe("Testira stranicu Automation practice", () =>{

    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php");      
    })

    it("Otvara stranicu Evening dresses", () => {
        cy.url().should("contain","automationpractice.com");
        cy.get("a[title='Evening Dresses']").first().click({force:true});
        cy.url().should("contain","id_category=10");
    })

    it("Primjenjuje filtere", () =>{

        cy.get("#selectProductSort").select("price:asc"); //DOHVACAMO BAS SELECT ELEMENT
        cy.get("input[id='layered_id_attribute_group_2']").check();
        cy.get("#layered_id_attribute_group_24").click();

    })

    it("Dodaje u košaricu", ()=>{
        cy.wait(3000);
        cy.get("a[title='Add to cart']").first().click();
        cy.get("#layer_cart").should("exist");
        cy.contains("Continue shopping").click();
        cy.get(".ajax_cart_quantity").should("not.contain.text", "0");

    })
})