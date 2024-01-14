///<reference types='Cypress'/>
import { addToCardPage } from "../../pages/addToCartPage";
import testData from '../../fixtures/loginData.json'
const addtocartpage=new addToCardPage()



describe('test automation',()=>{
    before(()=>{
        cy.login(testData.login.email,testData.login.password)
    })
    it('add to caert test',()=>{
      addtocartpage.enterSearchContentAndClick(testData.product.productName)
      addtocartpage.addToCart()
      addtocartpage.verifySuccessMessage().should('contain',testData.message.successMessage)

    })
})