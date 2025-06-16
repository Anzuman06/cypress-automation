class CartPage {
 visitCartPage() {
  cy.get('a[href="/view_cart"]', { timeout: 10000 })
    .should('exist')
    .first()
    .click();
  cy.url().should('include', '/view_cart');
}
  cartInfo(){
   this.visitCartPage();
   cy.get('#empty_cart').should('contain.text', 'Cart is empty! Click here to buy products.');
   cy.contains('u', 'here').click();
   cy.url().should('include', '/products');
  }
  cartProducts(product){
    cy.get('#cart_info').invoke('text').should('match', /saree/i); // 'i' means case-insensitive
  }
  previewItem(){
     cy.get('.cart_description').first().click();
  }
   writeReview(review){
    cy.get('#name').type(review.name);
    cy.get('#email').type(review.email);
    cy.get('#review').type(review.message);
    cy.get('#button-review').click();
  }
  increaseQuantity(number){
   cy.get('#quantity').clear().type(number.value);
   cy.get('button[type="button"]').contains('Add to cart').click();
   cy.contains('View Cart').click();
  }
 
  removeItem(){
   cy.get('tr[id="product-39"] a[class="cart_quantity_delete"]').click();
  }
  proceedToCheckout() {
    cy.contains('Proceed To Checkout').click();
  }

  placeOrder() {
    cy.contains('Place Order').click();
  }

  fillPaymentDetails(cardDetails) {
    cy.get('input[name="name_on_card"]').type(cardDetails.name);
    cy.get('input[name="card_number"]').type(cardDetails.number);
    cy.get('input[placeholder="ex. 311"]').type(cardDetails.cvc);
    cy.get('input[placeholder="MM"]').type(cardDetails.month);
    cy.get('input[placeholder="YYYY"]').type(cardDetails.year);
    cy.get('#submit').click();
  }

  viewOrderPlaced() {
    cy.contains('Order Placed!').should('be.visible');
    cy.contains('Continue').click();
  }
}

export default new CartPage();
