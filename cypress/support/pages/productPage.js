class ProductPage {
  visitProductPage() {
    cy.visit('https://automationexercise.com/');
  }

  goToProductsPage() {
    cy.get('a[href="/products"]').click();
  }

  scrollToCategorySection() {
    cy.get('.left-sidebar').scrollIntoView().contains('Category');
  }

  selectWomenCategory() {
    cy.contains('Women').click();
    cy.contains('Dress').click();
  }

  addProductToCart(index) {
    cy.get('.features_items .col-sm-4')
      .eq(index)
      .trigger('mouseover')
      .find('a')
      .contains('Add to cart')
      .should('be.visible')
      .click();

    cy.get('.modal-content', { timeout: 5000 }).should('be.visible');
    cy.contains('Continue Shopping').click();
  }

  viewProductAndAddToCart() {
    cy.get('.features_items .col-sm-4')
      .eq(2)
      .contains('View Product')
      .click();

    cy.contains('Add to cart').click();
  }

  clickViewCartButton() {
    cy.get('.modal-content p').should('contain.text', 'Your product has been added to cart.');
    cy.contains('View Cart').click();
  }
}

export default new ProductPage();
