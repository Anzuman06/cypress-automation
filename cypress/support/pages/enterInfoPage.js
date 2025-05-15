class EnterInfoPage{
   checkTitle(title){
     return cy.get(`input[name="title"][value="${title}"]`).check();
   } 
   getFirstNAmeField(){
        return cy.get('[data-qa="first_name"]');

    }
   getLastNameField(){
    return cy.get('[data-qa="last_name"]');
   }
   getPasswordfield(){
    return cy.get('[data-qa="password"]');
   }
   getAdressFiled(){
     return cy.get('[data-qa="address"]');
   }
   selectCountry(countryName){
    return cy.get('[data-qa="country"]').select(countryName);
   }
   getStateField(){
    return cy.get('[data-qa="state"]');
   }
   getCityField(){
    return cy.get('[data-qa="city"]');
   }
   getZipcode(){
     return cy.get('[data-qa="zipcode"]');
   }
   getMobileNumberfiled(){
    return cy.get('[data-qa="mobile_number"]');
   }
   clickCreateAccountButton(){
    return cy.get('[data-qa="create-account"]');
   }
   clickContinueButton(){
    return cy.get('[data-qa="continue-button"]');
   }
   getHomePage(){
    return cy.get('https://automationexercise.com/')
   }
  verifyLoggedInAs(username) {
    return cy.contains(`Logged in as ${username}`).should('be.visible');
  }
   fillEnterInfo(user){
    this.checkTitle(user.title);
    this.getFirstNAmeField().type(user.firstName);
    this.getLastNameField().type(user.lastName);
    this.getPasswordfield().type(user.password);
    this.getAdressFiled().type(user.address);
    this.selectCountry(user.countryName);
    this.getStateField().type(user.state);
    this.getCityField().type(user.city)
    this.getZipcode().type(user.zipcode);
    this.getMobileNumberfiled().type(user.mobile);
    this.clickCreateAccountButton().click();
   }
}
 export default new EnterInfoPage();