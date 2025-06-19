describe('API - verify Login', () => {
   it('should return 200 for valid credentials', () => {
      cy.request({
        method: 'post',
        url:'https://automationexercise.com/api/verifyLogin',
        form: true,// important for x-www-form-urlencoded
        body: {
            email: 'mytestuser@example.com',
            password: '543123!@#A'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        // ✅ Parse stringified JSON
      const parsedBody = JSON.parse(response.body);

      expect(parsedBody.responseCode).to.eq(200);
      expect(parsedBody.message).to.eq('User exists!');
      });
   });
});