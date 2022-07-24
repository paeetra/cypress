describe("Brisanje artikla iz košarice", ()=>{
    
    before(() => {
        cy.visit("http://automationpractice.com/index.php");
        cy.get("a[title='Summer Dresses']").first().click({force:true});
    })

    it("Dodaje u košaricu", () =>{
        cy.get(".product_list > li").first().trigger('mouseover');
        cy.get("#layer_cart").should("exist");
        cy.get("a[title='Add to cart']").first().click();
        cy.get("a[title='Proceed to checkout']").click();
        cy.url().should("contain", "index.php?controller=order");

    });

    it("Briše iz košarice", () =>{
        cy.get("a[title='Delete']").click();
        cy.get(".alert").should("exist").should("contain","Your shopping cart is empty.");
        
    });
    

})