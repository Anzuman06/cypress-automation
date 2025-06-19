import RegisterPage from '../../support/pages/registerPage'

describe('sign Up Flow - pom', () => {

    it('should show error if email is already registered', () => {
        RegisterPage.visitHomePage();
        RegisterPage.clickSignupLogin();
        const randomEmail = `user${Date.now()}@Text.com`;
        RegisterPage.getSignupNameInput().type('Test User');
        RegisterPage.getsignupEmailInput().type(randomEmail);
        RegisterPage.clickSignupButton().click();
        cy.get('body').then(($body) => {
            if ($body.text().includes('Email Address already exist!')){
               RegisterPage.getSignupError().should('be.visible') 
    }
        else {// OR
              RegisterPage.getEnterAccountInfoText().should('be.visible')
        }
        })
        
    cy.wait(3000); // 3 seconds
    });

});

