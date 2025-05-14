import LoginPage from '../support/pages/loginPage'
const loginPage = new LoginPage()
describe('Automation excercise Login using POM',() => {
    it('should log in successfully with valid credentials', () => {
    loginPage.visit()
    loginPage.clickLoginLink()
    loginPage.enterEmail('mytestuser@example.com')
    loginPage.enterPassword('5364!dfGH')
    loginPage.clickLoginButton()
    cy.get('body').then(($body) => {
        if ($body.text().includes('Your email or password is incorrect!')){
             loginPage.getWrongCredentials().should('be.visible')
        }
        else
        {
           loginPage. getLoggedInUsername().should('be.visible')
        }
    })
    cy.wait(3000) ;// 3 seconds
   })

})
