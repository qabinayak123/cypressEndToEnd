///<reference types='Cypress'/>
import { registerPage } from "../../pages/registerPage"
import registerData from '../../fixtures/registerpage.json'
const registerobj=new registerPage()
describe('test automation',()=>{
 it('Registration flow automation',()=>{
     registerobj.openUrl()
     registerobj.enterfirstname(registerData.firstname)
     registerobj.enterlastname(registerData.lastnme)
     registerobj.enteremail(registerData.email)
     registerobj.enterphone(registerData.telephone)
     registerobj.enterpassword(registerData.password)
     registerobj.enteryconfirmpassword(registerData.password)
     registerobj.clickCheckbox()
     registerobj.clickcontinue()

 })



})