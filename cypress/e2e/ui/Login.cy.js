import LoginPage from '../../support/pages/loginPage'
describe('Automation excercise Login using POM',() => {
    it('should log in successfully with valid credentials', () => {
    LoginPage.visit();
    LoginPage.clickLoginLink();
    LoginPage.enterEmail('mytestuser@example.com');
    LoginPage.enterPassword('543123!@#A');
    LoginPage.clickLoginButton();
    cy.get('body').then(($body) => {
        if ($body.text().includes('Your email or password is incorrect!')){
             LoginPage.getWrongCredentials().should('be.visible')
        }
        else
        {
           LoginPage.getLoggedInUsername().should('be.visible')
        }
    });
    cy.wait(3000) ;// 3 seconds
   })

})
