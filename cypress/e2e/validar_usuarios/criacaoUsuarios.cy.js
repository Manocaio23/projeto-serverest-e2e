
import { faker } from '@faker-js/faker';

describe('Teste de Login', () => {
    it('Deve fazer login como administrador', () => {
      cy.visit('https://front.serverest.dev/login');
      const randomName = faker.person.fullName(); 
      const randomEmail = faker.internet.email();

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
  
   
  });