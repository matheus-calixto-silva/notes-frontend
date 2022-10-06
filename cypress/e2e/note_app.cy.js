describe('Note ', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset');
    const user = {
      name: 'Superuser',
      username: 'root',
      password: 'salainen',
    };
    cy.request('POST', 'http://localhost:3001/api/users/', user);
    cy.visit('http://localhost:3000');
  });

  it('front page can be opened', function () {
    cy.contains('Notes');
  });

  it('login fails with wrong password', function () {
    cy.contains('login').click();
    cy.get('#username').type('mluukkai');
    cy.get('#password').type('wrong');
    cy.get('#login-button').click();

    cy.get('.error')
      .should('contain', 'wrong credentials')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
      .and('have.css', 'border-style', 'solid');

    cy.get('html').should('not.contain', 'Superuser logged in');
  });

  it('login form can be opened', function () {
    cy.contains('login').click();
    cy.get('#username').type('root');
    cy.get('#password').type('salainen');
    cy.get('#login-button').click();

    cy.contains('Superuser logged in');
  });

  describe('when logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'root', password: 'salainen' });
    });

    describe('and several notes exist', function () {
      beforeEach(function () {
        cy.createNote({ content: 'first note', important: false });
        cy.createNote({ content: 'second note', important: false });
        cy.createNote({ content: 'third note', important: false });
      });

      it('one of those can be made important', function () {
        cy.contains('second note').parent().find('button').click();
        cy.contains('second note')
          .parent()
          .find('button')
          .should('contain', 'make not important');
      });
    });
  });
});
