describe('Home', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should have an input', () => {
    cy.get('home-component .lead');
  });

  it('should have lead text', () => {
    cy.get('home-component').find('.lead')
      .should('have.length', 1)
      .first().should('have.text', 'AWESOME, CUSTOMIZABLE, FREE')
      .screenshot('home-screen-test2.png');
  });

  // it('should add a name to the list using the form', () => {
  //   cy.get('sd-home form input').type('Tim Berners-Lee');
  //   cy.get('sd-home form button').click();
  //   cy.get('sd-home ul').find('li')
  //     .should('have.length', 5)
  //     .eq(4).should('have.text', 'Tim Berners-Lee');
  // });

});
