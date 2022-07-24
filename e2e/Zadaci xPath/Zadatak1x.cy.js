describe("Demonstrira click funkciju na wikipediji", () =>{

    it("Odrađuje klikove", () => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
        
        //1.nacin
        //cy.xpath("//a[@href='/wiki/Wikipedia:Contents']").click();
        
        //2.nacin
        //cy.xpath("//span[text()='Contents']").click();

        //3.nacin
        cy.xpath("//li[@id='n-contents']/a").click();

        //4.nacin vise childova elementa a
        //cy.xpath("//li[@id='n-contents']/a[@href='/wiki/Wikipedia:Contents']").click();

        cy.xpath("//div[@class='contentsPage__section']//a[text()='Technology' and @href='/wiki/Wikipedia:Contents/Technology_and_applied_sciences']").click();

        //Kliknuti na prvi gumb koji sadrzi Software

        //1. nacin
        cy.xpath("//*[text()='Software']").first().click();

        //2.nacin (have.text)
        //cy.xpath("//*[text()='Software'])[0]").click();

        //cy.contins
        cy.xpath("//*[contains (text(), 'Software')]").first().click();

        cy.go(-1);
        cy.reload();   
        cy.go(1);  
        cy.go(-2);
    
    })
})