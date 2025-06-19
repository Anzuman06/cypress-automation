import ContactUs from '../../support/pages/contactUs';
describe('Contact page form submission', () => {
  it('Should fill out and submit the contact form successfully', () => {
     ContactUs.visitHomePage();
     ContactUs.GoToContactUs();

  const contact = {
        name: 'jonny',
        email: 'testing213@test.com',
        subject: 'saving contact info',
        message: 'hi, there!'
  }  
   ContactUs.fillContactForm(contact);
   ContactUs.clickSubmitButton();
   ContactUs.verifySuccessMessage();
   ContactUs.visitHomePage();// Navigate back to home
  })

})