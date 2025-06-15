class LoginPage{
    visit(){
        cy.visit('https://automationexercise.com/')
    }
 clickLoginLink(){
   cy.contains('Signup / Login').click()
 }
 enterEmail(email){
    cy.get('input[data-qa="login-email"]').type(email)
 }

 enterPassword(password){
    cy.get('input[data-qa="login-password"]').type(password)
 }
 clickLoginButton(){
    cy.get('button[data-qa="login-button"]').click()
 }
 getLoggedInUsername(){
    return cy.get('a').contains('Logged in as')
 }  
 getWrongCredentials(){
   return cy.contains('Your email or password is incorrect!')
 }
}
export default LoginPage