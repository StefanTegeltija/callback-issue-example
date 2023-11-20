When('Login', () => {
  // cy.session('login', () => {
  cy.visit('/');
  cy.get('[data-testid="login-button"]').eq(1).click({ force: true });
  cy.origin(`https://${Cypress.env('auth0Domain')}/`, () => {
    cy.get('input#username').type('Stefan9123');
    cy.wait(1000);
    cy.get('input#password').type('Gordana1994!');
    cy.wait(1000);
    cy.contains('Continue').click({ force: true });
    cy.wait(1000);
  });
  // cy.contains('Sign in with Auth0').click({ force: true });
  // });
  // cy.wait(1000);
});
