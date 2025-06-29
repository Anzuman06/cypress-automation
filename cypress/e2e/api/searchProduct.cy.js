describe('Search Product API', () => {
    it('search for a spacific products list', () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
            form: true,
            body: {
                search_product:'saree'
            }
        }).then((response) => {
              expect(response.status).to.eq(200);
              const body = typeof response.body === 'string' ? JSON.parse (response.body) : response.body;
              expect(body).to.have.property('products');
              expect(body.products).to.be.an('array') ;
              body.products.forEach((product) => {
                expect(product.name.toLowerCase()).to.include('saree');
              })    
            })
    })
})