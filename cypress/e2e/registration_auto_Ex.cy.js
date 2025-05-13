import LoginPage from '../support/pages/loginPage'
const loginPage = new LoginPage()
describe('Automation excercise Login using POM',() => {
    it('should log in successfully with valid credentials', () => {
    loginPage.visit()
    loginPage.clickLoginLink()
    loginPage.enterEmail('correct_email@example.com')
    loginPage.enterPassword('correct_password')
    loginPage.clickLoginButton()
    loginPage.getWrongCredentials().should('contain.text', 'Your email or password is incorrect!')
   })
})

