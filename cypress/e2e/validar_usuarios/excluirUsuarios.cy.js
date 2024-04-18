import { faker } from '@faker-js/faker';
describe('Deve clicar no botão de excluir e não existir o usuário', () => {
    it('Validar que o usuário criado foi excluido', () => {
      const randomName = faker.person.fullName(); 
      const randomEmail = faker.internet.email();

      cy.log(randomName); // mostra usuário
      cy.Criar_usuario(randomName,randomEmail);
      cy.fazerLoginADM();
      cy.get('[data-testid="listarUsuarios"]').click()
      cy.wait(2000)
      cy.get('td').should('be.visible').should('contain.text', randomName);
     

    });
  
   
  });