import RegisterPage from '../../support/pages/registerPage';
import EnterInfoPage from '../../support/pages/enterInfoPage';
import ProductPage from '../../support/pages/productPage';
import CartPage from '../../support/pages/cartPage';

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
    ProductPage.visitHomePage();
    ProductPage.goToProductsPage();
    ProductPage.scrollToCategorySection();
    ProductPage.selectWomenCategory();
    ProductPage.addProductToCart(0); // First
    ProductPage.addProductToCart(1); // Second
    ProductPage.viewProductAndAddToCart();
    ProductPage.clickViewCartButton();

    // Checkout
    CartPage.proceedToCheckout();
    CartPage.placeOrder();

    const card = {
      name: 'Jane Doe',
      number: '4111111111111',
      cvc: '323',
      month: '11',
      year: '2029'
    };

    CartPage.fillPaymentDetails(card);
    CartPage.viewOrderPlaced();
  });
});
