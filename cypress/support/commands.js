
import { faker } from '@faker-js/faker';

Cypress.Commands.add('acessar_site', () => {
  cy.visit('https://front.serverest.dev/login');

});

Cypress.Commands.add('fazerLoginADM', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('#email').type('usarioadm@outlook.com');
    cy.get('#password').type('teste');
    cy.get('button[type="submit"]').click();
    cy.wait(3000)
      cy.get('p').should('be.visible').should('contain.text', 'Este é seu sistema para administrar seu ecommerce.');
      cy.get('h1').should('be.visible').should('contain.text', 'usarioadm@outlook.com');
  });


  Cypress.Commands.add('fazerLoginNaoADM', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('#email').type('testenaoadm@outlook.com');
    cy.get('#password').type('teste');
    cy.get('button[type="submit"]').click();
    cy.wait(3000)
      cy.get('h1').should('be.visible').should('contain.text', 'Serverest Store');
  });

  Cypress.Commands.add('Criar_usuario', (randomName,randomEmail) => {
    cy.visit('https://front.serverest.dev/login');
      

      cy.get('[data-testid="cadastrar"]').click();
      cy.get('#nome').type(randomName);
      cy.get('#email').type(randomEmail);
      cy.get('#password').type('teste');
      cy.get('#administrador').click();
      cy.get('[data-testid="cadastrar"]').click();

      cy.wait(3000)
      cy.get('p').should('be.visible').should('contain.text', 'Este é seu sistema para administrar seu ecommerce.');
      cy.get('h1').should('be.visible').should('contain.text', randomName);
  });





