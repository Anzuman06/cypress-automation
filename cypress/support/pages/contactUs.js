class ContactUs{
    visitHomePage(){
        cy.visit('https://automationexercise.com/');
    }
    GoToContactUs(){
        cy.get('a[href="/contact_us"]').click();
    }
   fillContactForm(contact){
        cy.get('input[placeholder="Name"]').type(contact.name);
        cy.get('input[placeholder="Email"]').type(contact.email);
        cy.get('input[placeholder="Subject"]').type(contact.subject);
        cy.get('#message').type(contact.message);
   }
   clickSubmitButton(){
      cy.get('input[value="Submit"]').click();
   }
   verifySuccessMessage(){
      cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
   }
   backToHome(){
    cy.get('a[class="btn btn-success"] span').click();
   }
}
export default new ContactUs();