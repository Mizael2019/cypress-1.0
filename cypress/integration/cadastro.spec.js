/// <reference types="cypress" />

context('Cadastro', () => {
    it('Cadastro de usuário do Site', () => {
        cy.visit('Register.html');

        cy.get('input[placeholder="First Name"]').type('Mizael');
        cy.get('input[ng-model^="Last"]').type('Nazareno');
        cy.get('input[ng-model^="Email"]').type('junior@email.com');
        cy.get('input[ng-model^="Phone"]').type('1234567890');

        cy.get('input[value=FeMale]').check();
        cy.get('input[type=checkbox]').check('Cricket');
        cy.get('input[type=checkbox]').check('Hockey');

    });
});

