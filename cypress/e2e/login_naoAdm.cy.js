
describe('Teste de Login', () => {
    it('Deve fazer login como administrador', () => {
      cy.visit('https://front.serverest.dev/login');
      cy.get('#email').type('testenaoadm@outlook.comm');
      cy.get('#password').type('teste');
      cy.get('[data-testid="entrar"]').click();
      cy.wait(2000)
    
      //validação
      cy.get('h1').should('contain.text', 'Serverest Store');

    });
  
   
  });
