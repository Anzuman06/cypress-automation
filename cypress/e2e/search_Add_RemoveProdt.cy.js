import ProductPage from '../support/pages/productPage';
import CartPage from '../support/pages/cartPage';
import LoginPage from '../support/pages/loginPage';
describe('Search for Item, Add to cart, Review the product, remove items and checkout finally', () => {
 it('should search item to add and remove excess items before checkout' , () => {
    //login first
    LoginPage.visit();
    LoginPage.clickLoginLink();
    LoginPage.enterEmail('mytestuser@example.com');
    LoginPage.enterPassword('543123!@#A');
    LoginPage.clickLoginButton();
    //Check the cart page 1st to be found empty and vsit product page from there
    CartPage.cartInfo();
     //search for specific item to add-to-cart
    const search = {
        item: 'saree'
    };
     ProductPage.searchProduct(search);
     ProductPage.addProductToCart(0);
     ProductPage.addProductToCart(1);
     ProductPage.addProductToCart(2)
     //visit cart page to verify the products added
     CartPage.visitCartPage();
     const product= {
        item: 'saree'
     }
     CartPage.cartProducts(product);
     CartPage.previewItem();
     const review= {
        name: 'Ryan',
        email: 'ryan@war.loom',
        message: 'this is really beautiful'
     }
     CartPage.writeReview(review);
     const number= {
        value: '2'
     }
     CartPage.increaseQuantity(number);
     CartPage.removeItem(); 
     //Do final checkout
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
 })
})
