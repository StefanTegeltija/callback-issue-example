import './commands';

beforeEach(() => {
  cy.window().then((win) => {
    win.localStorage.setItem('cookies', 'true');
  });
  // Check if the value is set in local storage
  cy.window().then((win) => {
    expect(win.localStorage.getItem('cookies')).to.equal('true');
  });
  cy.intercept({ resourceType: /xhr/ }, { log: false });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
