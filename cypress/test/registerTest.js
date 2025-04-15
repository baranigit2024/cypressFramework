import {registerPage} from "../pages/registerPage"
const registerObj = new registerPage()
import registerData from "../fixtures/registerData.json"

describe("registerPage" ,()=>
{
   it("register page block" ,()=>
{


    registerObj.openUrl()
    registerObj.enterFirstName(registerData.firstName)
    registerObj.enterlastname(registerData.lastName)
    registerObj.enterEmail(registerData.email)
    registerObj.enterTelephone(registerData.telephone)
    registerObj.enterPassword(registerData.password)
    registerObj.selectCheckbox()
    registerObj.clickOnContinue()

})
})