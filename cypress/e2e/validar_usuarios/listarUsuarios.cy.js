
describe('Teste de Login', () => {
    it('Deve fazer login como administrador', () => {
      const randomName = faker.person.fullName(); 
      const randomEmail = faker.internet.email();

      cy.Criar_usuario(randomName,randomEmail);
      cy.fazerLoginADM();
      cy.get('[data-testid="listarUsuarios"]').click()
      cy.wait(2000)
      cy.get('td').should('be.visible').should('contain.text', randomName);
      

    });
  
   
  });