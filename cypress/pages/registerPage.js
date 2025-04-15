export class registerPage {

    weblocator = {

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary'

    }

    openUrl() {
        cy.visit('')
        
        
    }
    enterFirstName(firstnmae) {
        cy.get(this.weblocator.firstName).type(firstnmae)
    }
    enterlastname(lastname) {
        cy.get(this.weblocator.lastName).type(lastname)
    }
    enterEmail(email) {
        cy.get(this.weblocator.email).type(email)
    }

    enterTelephone(telephone) {
        cy.get(this.weblocator.telephone).type(telephone)
    }

    enterPassword(password) {
        cy.get(this.weblocator.password).type(password)
        cy.get(this.weblocator.passwordConfirm).type(password)
    }
    selectCheckbox() {

        cy.get(this.weblocator.policyCheckbox).check()
    }
    clickOnContinue() {
        cy.get(this.weblocator.continue).click()
    }

}