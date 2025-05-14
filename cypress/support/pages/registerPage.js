class RegisterPage {
visitHomePage(){
 cy.visit('https://automationexercise.com/');
}
clickSignupLogin(){
    cy.contains('Signup / Login').click()
}
getSignupNameInput(){
    return cy.get('[data-qa="signup-name"]')
}
getsignupEmailInput(){
    return cy.get('[data-qa="signup-email"]')
}
clickSignupButton(){
    return cy.get('[data-qa="signup-button"]')
}
getSignupError(){
    return cy.contains('Email Address already exist!');
}
getEnterAccountInfoText() {
    return cy.contains('Enter Account Information')
}
}
export default new RegisterPage();