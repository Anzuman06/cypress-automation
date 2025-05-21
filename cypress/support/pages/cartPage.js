class CartPage {
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
