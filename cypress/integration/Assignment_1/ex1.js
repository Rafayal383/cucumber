describe('Testing Goodreads ', () => {
    it('test goodreads', () => {
        //visiting the specific 
        cy.visit('https://www.goodreads.com/user/sign_in');
        cy.get('button[class="gr-button gr-button--dark gr-button--auth authPortalConnectButton authPortalSignInButton"]').click();

    });
});