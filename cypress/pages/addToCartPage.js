export class addToCardPage{
    

    weblocators={
        searchBox:'input[placeholder="Search"]',
        searchboxClick:'.fa.fa-search',
        product:'img[title="MacBook"]',
        addToCartButton:'button[class="btn btn-link dropdown-toggle"] span[class="hidden-xs hidden-sm hidden-md"]',
        successMessage:'.alert'
    }
    enterSearchContentAndClick(productSearch){
        cy.get(this.weblocators.searchBox).clear().type(productSearch)
        cy.get(this.weblocators.searchboxClick).click()
    }
    addToCart(){
        cy.get(this.weblocators.addToCartButton).click({force: true})
    }
    verifySuccessMessage(){
        return cy.get(this.weblocators.successMessage)
    }





}