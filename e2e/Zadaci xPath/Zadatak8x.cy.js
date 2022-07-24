describe("Testira stranicu Automation practice", () =>{

    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php");      
    })

    it("Otvara stranicu Evening dresses", () => {
        cy.url().should("contain","automationpractice.com");
        cy.xpath("//a[@title='Evening Dresses']").first().click({force:true});
        cy.url().should("contain","id_category=10");
    })

    it("Primjenjuje filtere", () =>{

        cy.xpath("//select[@id='selectProductSort']").select("price:asc"); // bas SELECT element dohvacamo
        cy.xpath("//input[@id='layered_id_attribute_group_2']").check();
        cy.xpath("//input[@id='layered_id_attribute_group_24']").click();

    })

    it("Dodaje u košaricu", ()=>{
        cy.wait(3000);
        cy.xpath("//a[@title='Add to cart']").first().click();
        cy.xpath("//div[@id='layer_cart']").should("exist"); //je li prikazana poruka
        cy.xpath("//span[@title='Continue shopping']").click();
        cy.xpath("//span[@class='ajax_cart_quantity']").should("not.contain.text", "0");

    })
})