import RegisterPage from '../support/pages/registerPage';
import EnterInfoPage from '../support/pages/enterInfoPage';
import productPage from '../support/pages/productPage';
import cartPage from '../support/pages/cartPage';

describe('Complete purchase flow', () => {
  it('should sign up, add product to cart and place order', () => {
    const randomEmail = `user${Date.now()}@test.com`;
    const userName = `user_${Math.floor(Math.random() * 10000)}_${Date.now()}`;

    // Sign up
    RegisterPage.visitHomePage();
    RegisterPage.clickSignupLogin();
    RegisterPage.getSignupNameInput().type(userName);
    RegisterPage.getsignupEmailInput().type(randomEmail);
    RegisterPage.clickSignupButton().click();

    const user = {
      title: 'Mrs',
      firstName: 'John',
      lastName: 'Dae',
      password: 'Password123!',
      address: 'house 16, road 04, Forcetown, Canada',
      countryName: 'Canada',
      state: 'CA',
      city: 'Los Angeles',
      zipcode: '90001',
      mobile: '1234567890'
    };

    EnterInfoPage.fillEnterInfo(user);
    cy.contains('Account Created!').should('be.visible');
    cy.wait(3000);
    EnterInfoPage.clickContinueButton().click();
    EnterInfoPage.verifyLoggedInAs(userName);

    // Add products
    productPage.visitHomePage();
    productPage.goToProductsPage();
    productPage.scrollToCategorySection();
    productPage.selectWomenCategory();
    productPage.addProductToCart(0); // First
    productPage.addProductToCart(1); // Second
    productPage.viewProductAndAddToCart();
    productPage.clickViewCartButton();

    // Checkout
    cartPage.proceedToCheckout();
    cartPage.placeOrder();

    const card = {
      name: 'Jane Doe',
      number: '4111111111111',
      cvc: '323',
      month: '11',
      year: '2029'
    };

    cartPage.fillPaymentDetails(card);
    cartPage.viewOrderPlaced();
  });
});
