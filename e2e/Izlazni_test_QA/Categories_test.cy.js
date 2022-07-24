describe("Filtriranje po boji", ()=>{

    it("Prikazuje odabranu kategoriju", () =>{
        
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "automationpractice.com/index.php");
    
        cy.get("a[title='Summer Dresses']").first().click({force:true});
    });

    it("Filtrira po boji", () =>{

        cy.get("input[id='layered_id_attribute_group_14']").click();
        
    });

})