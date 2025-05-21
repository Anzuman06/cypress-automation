import RegisterPage from '../support/pages/registerPage'
import EnterInfoPage from '../support/pages/enterInfoPage'
describe('Complete sign up and go to the enter info page', () => {
    it('should sign up 1st and then enter others required information', () => {
       const randomEmail = `user${Date.now()}@test.com`;
       const userName = `user_${Math.floor(Math.random() * 10000)}_${Date.now()}`;
       //signup setup
          RegisterPage.visitHomePage();
          RegisterPage.clickSignupLogin();
          RegisterPage.getSignupNameInput().type(userName);
          RegisterPage.getsignupEmailInput().type(randomEmail);
          RegisterPage.clickSignupButton().click();

      //Fill Required Information    

      const user = {
        title: 'Mrs',
        firstName: 'John',
        lastName: 'Dae',
        password: 'Password123!',
        address: 'house 16,road 04,Forcetown,Canada',
        countryName: 'Canada',
        state: 'CA',
        city: 'Los Angles',
        zipcode: '90001',
        mobile: '1234567890'
        
      };
      EnterInfoPage.fillEnterInfo(user);
      cy.contains('Account Created!').should('be.visible');
      cy.wait(3000);
      EnterInfoPage.clickContinueButton().click();
      EnterInfoPage.verifyLoggedInAs(userName);    // Verify "Logged in as"
    });
});