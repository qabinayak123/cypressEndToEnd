export class registerPage{

    weblocators={
        firstname:'#input-firstname',
        lastname:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        policyCheckbox:'input[value="1"][name="agree"]',
        continue:'input[value="Continue"]'

    }
openUrl(){
    cy.visit(Cypress.env('URL'))
}

    enterfirstname(fanme){
        cy.get(this.weblocators.firstname).type(fanme)
    }
    enterlastname(lanme){
        cy.get(this.weblocators.lastname).type(lanme);
    }
    enteremail(email){
        cy.get(this.weblocators.email).type(email)
    }
    enterphone(phone){
        cy.get(this.weblocators.telephone).type(phone)
    }
    enterpassword(password){
        cy.get(this.weblocators.password).type(password)
    }
    enteryconfirmpassword(password){
        cy.get(this.weblocators.passwordConfirm).type(password)
    }
    clickCheckbox(){
        cy.get(this.weblocators.policyCheckbox).check()
    }
    clickcontinue(){
        cy.get(this.weblocators.continue).click()
    }
}