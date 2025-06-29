describe('Get all products API test', () => {
  it('should return the list of products with response status 200', () => {
    cy.request({
        method: 'Get',
        url: 'https://automationexercise.com/api/productsList'
    }).then((response) => {
        expect(response.status).to.eq(200);
        const body = typeof response.body === 'string' ? JSON.parse(response.body): response.body;
        expect(body).to.have.property('products');
        expect(body.products).to.be.an('array');
        cy.log('Total products:', body.products.length);
       });
    });
  });
